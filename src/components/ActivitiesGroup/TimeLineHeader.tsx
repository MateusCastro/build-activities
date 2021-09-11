import React from "react";
import { Timeline } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import CloudUp from "../assets/img/cloud-up.svg";
import Hammer from "../assets/img/hammer.svg";
import Clock from "../assets/img/clock.svg";
import Jenkins from "../assets/img/jenkins.svg";
import Database from "../assets/img/database.svg";
import LiferayDXP from "../assets/img/liferay-dxp.svg";
import ElasticSearch from "../assets/img/elasticsearch.svg";
import Nginx from "../assets/img/nginx.svg";

interface EmblemProps {
  img: string;
}

const Emblem: React.FC<EmblemProps> = ({ img }) => (
  <div className="-ml-1.5 border-2 rounded-full border-white relative">
    <img src={img} alt="service" className="w-6" />
    <div
      className="w-2 h-2 rounded-full absolute top-0 right-0 border-2 border-white z-10"
      style={{ backgroundColor: "#00AE55" }}
    />
  </div>
);

const TimeLineHeader: React.FC = () => (
  <Timeline.Item
    dot={
      <div className="border border-gray-200 rounded-full p-1.5">
        <img src={CloudUp} alt="cloud-up" className="w-8" />
        <div
          className="w-5 h-5 rounded-full absolute top-1 -right-1 
          border-4 border-white text-white flex justify-center items-center"
          style={{ backgroundColor: "#00AE55" }}
        >
          <CheckOutlined style={{ fontSize: "10px" }} />
        </div>
      </div>
    }
  >
    <div className="flex text-sm h-10 items-center">
      <img
        className="w-7 rounded-full"
        src="https://gravatar.com/avatar/7df4c367ea3a5475f05db9e2d32d5b13?d=blank&s=70"
        alt="avatar"
      />
      <div className="bg-gray-100 ml-6 py-1 px-2 rounded-full flex">
        <img src={Hammer} alt="cloud-up" className="w-4" />
        <span className="font-semibold text-xs ml-1">236</span>
      </div>
      <div className="ml-6 flex-grow flex">
        <Emblem img={Jenkins} />
        <Emblem img={Database} />
        <Emblem img={LiferayDXP} />
        <Emblem img={ElasticSearch} />
        <Emblem img={Nginx} />
      </div>
      <div className="ml-6 flex items-center">
        <img src={Clock} alt="clock" />
        <span className="ml-1 text-gray-500">2 hours ago</span>
      </div>
    </div>
  </Timeline.Item>
);

export default TimeLineHeader;
