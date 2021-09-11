import React from "react";
import { Card, Timeline } from "antd";

import TimeLineHeader from "./TimeLineHeader";
import TimeLineItem from "./TimeLineItem";

const ActivitiesGroup: React.FC = () => {
  return (
    <Card style={{ width: 546 }} className="activities-group">
      <div>
        <h3 className="text-2xl font-semibold">Builds and Deployments</h3>
      </div>
      <div className="mt-6">
        <Timeline>
          <TimeLineHeader />
          <TimeLineItem />
          <TimeLineItem />
          <TimeLineItem />
          <TimeLineItem />
        </Timeline>
      </div>
    </Card>
  );
};

export default ActivitiesGroup;
