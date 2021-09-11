import React from "react";

import { Timeline } from "antd";

import CloudUp from "../assets/img/cloud-up.svg";

const TimeLineItem: React.FC = () => (
  <Timeline.Item
    dot={
      <div className="border border-gray-200 rounded-full p-0.5">
        <img src={CloudUp} alt="cloud-up" className="w-6" />
        <div
          className="w-2.5 h-2.5 rounded-full absolute top-1 right-0 border-2 border-white"
          style={{ backgroundColor: "#00AE55" }}
        />
      </div>
    }
  >
    <div className="flex flex-col text-sm">
      <span>
        Deployment succeeded in <span className="text-gray-500">15s</span>
      </span>
      <span className="text-gray-500">2 hours ago</span>
    </div>
  </Timeline.Item>
);

export default TimeLineItem;
