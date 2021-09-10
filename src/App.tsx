import React from "react";
import { DatePicker } from "antd";

const App: React.FC = () => {
  return (
    <>
      <h1>Hello</h1>
      <img
        alt="img"
        className="rounded-full"
        src="https://store-images.s-microsoft.com/image/apps.15123.14043593014419749.25e534d6-f45f-46a9-980f-d1507690fcbb.026aa59b-fd1f-472d-8483-e40f453eb773?mode=scale&q=90&h=300&w=300"
      />
      <DatePicker />
    </>
  );
};

export default App;
