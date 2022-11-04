import { FC } from "react";

interface Props {
  classes?: string;
  color?: string;
}

const Circle: FC<Props> = ({ classes = "", color = "bg-blue-600" }) => {
  return (
    <div className={`h-full w-full overflow-hidden ${classes}`}>
      <div className={`h-full w-full rounded-full ${color}`} />
    </div>
  );
};

export default Circle;
