import React from "react";

export interface ButtonExampleProps {
  color?: string;
  title?: string;
}

const ButtonExample: React.FC<ButtonExampleProps> = ({
  color,
  title = "Button",
}) => (
  <button style={{ background: color }} type="button">
    {title}
  </button>
);

export default ButtonExample;
