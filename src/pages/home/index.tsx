import React, { useEffect, useState } from "react";
import ActivitiesGroup from "../../components/ActivitiesGroup";

export type User = {
  userEmail: string;
  initials: string;
  name: string;
  photoUrl: string;
};

export type Item = {
  createdAt: number;
  metadata: {
    user: User;
  };
  buildId: string;
  projectId: string;
  type: string;
  services?: {
    imageHint: string;
    serviceId: string;
  }[];
};

const Home: React.FC = () => {
  const [builds, setBuilds] = useState<Item[][]>([]);

  const getBuilds = async () => {
    const response = await fetch("https://en9owiuehhpzufj.m.pipedream.net/");
    setBuilds(await response.json());
  };

  useEffect(() => {
    getBuilds();
  }, []);

  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {builds.map((build, index) => (
          <div
            className="flex justify-center items-start"
            key={`build${index * 1}`}
          >
            <ActivitiesGroup build={build} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
