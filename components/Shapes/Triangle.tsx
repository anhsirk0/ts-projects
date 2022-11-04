import { FC } from "react";

interface Props {
  classes?: string;
  color?: string;
}

const Triangle: FC<Props> = ({ classes = "", color = "bg-blue-600" }) => {
  return (
    <div className={`h-full w-full overflow-hidden ${classes}`}>
      <div
        className={`h-full w-full scale-150 rotate-45 origin-top-right ${color}`}
      />
    </div>
  );
};

export default Triangle;
