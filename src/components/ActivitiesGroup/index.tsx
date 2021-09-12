import React from "react";
import { Card, Timeline } from "antd";

import TimeLineHeader from "./TimeLineHeader";
import TimeLineItem from "./TimeLineItem";

const build = [
  {
    createdAt: 1598375525969,
    metadata: {
      user: {
        userEmail: "zeno.rocha@liferay.com",
        initials: "Z",
        name: "Zeno Rocha",
        photoUrl:
          "https://gravatar.com/avatar/7df4c367ea3a5475f05db9e2d32d5b13?d=blank&s=70",
      },
    },
    buildId: "5",
    projectId: "acme",
    type: "CI_SUCCEEDED",
  },
  {
    createdAt: 1598375520341,
    metadata: {
      user: {
        userEmail: "zeno.rocha@liferay.com",
        initials: "Z",
        name: "Zeno Rocha",
        photoUrl:
          "https://gravatar.com/avatar/7df4c367ea3a5475f05db9e2d32d5b13?d=blank&s=70",
      },
    },
    buildId: "5",
    projectId: "acme",
    type: "DEPLOY_SUCCEEDED",
    services: [
      {
        imageHint: "liferaycloud/liferay-dxp",
        serviceId: "liferay",
      },
      {
        imageHint: "liferaycloud/nginx",
        serviceId: "webserver",
      },
      {
        imageHint: "liferaycloud/backup",
        serviceId: "backup",
      },
      {
        imageHint: "liferaycloud/elasticsearch",
        serviceId: "search",
      },
      {
        imageHint: "liferaycloud/database",
        serviceId: "database",
      },
    ],
  },
  {
    createdAt: 1598375404882,
    metadata: {
      user: {
        userEmail: "zeno.rocha@liferay.com",
        initials: "Z",
        name: "Zeno Rocha",
        photoUrl:
          "https://gravatar.com/avatar/7df4c367ea3a5475f05db9e2d32d5b13?d=blank&s=70",
      },
    },
    buildId: "5",
    projectId: "acme",
    type: "DEPLOY_STARTED",
    services: [
      {
        imageHint: "liferaycloud/backup",
        serviceId: "backup",
      },
      {
        imageHint: "liferaycloud/nginx",
        serviceId: "webserver",
      },
      {
        imageHint: "liferaycloud/liferay-dxp",
        serviceId: "liferay",
      },
      {
        imageHint: "liferaycloud/elasticsearch",
        serviceId: "search",
      },
      {
        imageHint: "liferaycloud/database",
        serviceId: "database",
      },
    ],
  },
  {
    createdAt: 1598375388777,
    metadata: {
      user: {
        userEmail: "zeno.rocha@liferay.com",
        initials: "Z",
        name: "Zeno Rocha",
        photoUrl:
          "https://gravatar.com/avatar/7df4c367ea3a5475f05db9e2d32d5b13?d=blank&s=70",
      },
    },
    buildId: "5",
    projectId: "acme",
    type: "BUILD_SUCCEEDED",
    services: [
      {
        imageHint: "liferaycloud/backup",
        serviceId: "backup",
      },
      {
        imageHint: "liferaycloud/nginx",
        serviceId: "webserver",
      },
      {
        imageHint: "liferaycloud/liferay-dxp",
        serviceId: "liferay",
      },
      {
        imageHint: "liferaycloud/elasticsearch",
        serviceId: "search",
      },
      {
        imageHint: "liferaycloud/database",
        serviceId: "database",
      },
    ],
  },
  {
    createdAt: 1598375371394,
    metadata: {
      user: {
        userEmail: "zeno.rocha@liferay.com",
        initials: "Z",
        name: "Zeno Rocha",
        photoUrl:
          "https://gravatar.com/avatar/7df4c367ea3a5475f05db9e2d32d5b13?d=blank&s=70",
      },
    },
    buildId: "5",
    projectId: "acme",
    type: "BUILD_STARTED",
    services: [
      {
        imageHint: "liferaycloud/backup",
        serviceId: "backup",
      },
      {
        imageHint: "liferaycloud/nginx",
        serviceId: "webserver",
      },
      {
        imageHint: "liferaycloud/liferay-dxp",
        serviceId: "liferay",
      },
      {
        imageHint: "liferaycloud/elasticsearch",
        serviceId: "search",
      },
      {
        imageHint: "liferaycloud/database",
        serviceId: "database",
      },
    ],
  },
  {
    createdAt: 1598375328031,
    metadata: {
      user: {
        userEmail: "zeno.rocha@liferay.com",
        initials: "Z",
        name: "Zeno Rocha",
        photoUrl:
          "https://gravatar.com/avatar/7df4c367ea3a5475f05db9e2d32d5b13?d=blank&s=70",
      },
    },
    buildId: "5",
    projectId: "acme",
    type: "CI_STARTED",
  },
];
const ActivitiesGroup: React.FC = () => {
  const getProcessingTime = (type: string) => {
    return build.find((item) => item.type === type)?.createdAt;
  };

  return (
    <Card style={{ width: 546 }} className="activities-group">
      <div>
        <h3 className="text-2xl font-semibold">Builds and Deployments</h3>
      </div>
      <div className="mt-6">
        <Timeline>
          <TimeLineHeader />
          {build.map((item) => (
            <TimeLineItem
              item={item}
              key={item.buildId + item.type}
              getProcessingTime={getProcessingTime}
            />
          ))}
        </Timeline>
      </div>
    </Card>
  );
};

export default ActivitiesGroup;
