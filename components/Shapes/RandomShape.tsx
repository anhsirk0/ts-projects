import { FC } from "react";
import { Circle, QuarterCircle, Triangle } from ".";
import dynamic from "next/dynamic";

interface Props {
  classes?: string;
  color?: string;
  num?: number;
}

const RandomShape: FC<Props> = ({ num = 1, classes = "", color = "" }) => {
  const DynamicTriangle = dynamic(() => import("./Triangle"), {
    ssr: false,
  });

  const DynamicCircle = dynamic(() => import("./Circle"), {
    ssr: false,
  });

  const DynamicQuarterCircle = dynamic(() => import("./QuarterCircle"), {
    ssr: false,
  });

  switch (num) {
    case 0:
      return <DynamicCircle classes={classes} color={color} />;
    case 1:
      return <DynamicQuarterCircle classes={classes} color={color} />;
    case 2:
      return (
        <DynamicQuarterCircle classes={classes + " -scale-x-100"} color={color} />
      );
    case 3:
      return (
        <DynamicQuarterCircle classes={classes + " -scale-y-100"} color={color} />
      );
    case 4:
      return (
        <DynamicTriangle classes={classes + " -scale-x-100"} color={color} />
      );
    case 5:
      return (
        <DynamicTriangle classes={classes + " -scale-y-100"} color={color} />
      );
    default:
      return <DynamicTriangle classes={classes} color={color} />;
  }
};

export default RandomShape;
