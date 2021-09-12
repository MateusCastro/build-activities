import React from "react";

import { Timeline } from "antd";
import moment from "moment";

import CloudUp from "../assets/img/cloud-up.svg";
import Hammer from "../assets/img/hammer.svg";
import CI from "../assets/img/ci.svg";

type Item = {
  createdAt: number;
  metadata: {
    user: {
      userEmail: string;
      initials: string;
      name: string;
      photoUrl: string;
    };
  };
  buildId: string;
  projectId: string;
  type: string;
  services?: {
    imageHint: string;
    serviceId: string;
  }[];
};

interface Props {
  item: Item;
  getProcessingTime: (type: string) => number | undefined;
}

interface Info {
  icon: string;
  statusColor?: string;
  title: string;
  timeFromNow: string;
  processingTime?: number;
}

const TimeLineItem: React.FC<Props> = ({ item, getProcessingTime }) => {
  const [service, status] = item.type.split("_");

  const getIcon = () => {
    switch (service) {
      case "CI":
        return CI;
      case "BUILD":
        return Hammer;
      case "DEPLOY":
        return CloudUp;
      default:
        return CloudUp;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "SUCCEEDED":
        return "bg-green-500";
      case "FAILED":
        return "bg-red-500";
      case "PROGRESS":
        return "bg-blue-500";
      case "PARTIALLY":
        return "bg-yellow-500";
      case "CANCELED":
        return "bg-gray-500";
      default:
        return "hidden";
    }
  };

  const getTitle = () => {
    const textService = service === "CI" ? "Continuous integration" : service;
    return `${textService} ${status}`;
  };

  const capitalize = (text: string) => {
    const textLowerCase = text.toLowerCase();

    return (
      textLowerCase.toLowerCase().charAt(0).toUpperCase() +
      textLowerCase.slice(1)
    );
  };

  const loadInfos = () => {
    const informations: Info = {} as Info;
    informations.icon = getIcon();
    informations.statusColor = getStatusColor();
    informations.title = capitalize(getTitle());
    informations.processingTime =
      status !== "STARTED"
        ? getProcessingTime(`${service}_STARTED`)
        : undefined;

    return informations;
  };

  const info = loadInfos();

  const getTime = () => {
    const time = moment.duration(
      moment(item.createdAt).diff(info.processingTime)
    );
    const timeHumanize = time.humanize();

    return timeHumanize === "a few seconds"
      ? `${time.asSeconds().toFixed()} seconds`
      : timeHumanize;
  };

  return (
    <Timeline.Item
      dot={
        <div className="border border-gray-200 rounded-full p-0.5">
          <img src={info.icon} alt="service" className="w-6" />
          <div
            className={`w-2.5 h-2.5 rounded-full absolute top-1 right-0 border-2 border-white ${info.statusColor}`}
          />
        </div>
      }
    >
      <div className="flex flex-col text-sm">
        <span>
          {info.title}{" "}
          {info.processingTime && (
            <span>
              in <span className="text-gray-500">{getTime()}</span>
            </span>
          )}
        </span>
        <span className="text-gray-500">
          {capitalize(moment(item.createdAt).fromNow())}
        </span>
      </div>
    </Timeline.Item>
  );
};

export default TimeLineItem;
