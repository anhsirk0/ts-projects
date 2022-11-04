import { FC } from "react";
import { Circle, SemiCircle, Triangle } from ".";
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

  const DynamicSemiCircle = dynamic(() => import("./SemiCircle"), {
    ssr: false,
  });

  switch (num) {
    case 0:
      return <DynamicCircle classes={classes} color={color} />;
    case 1:
      return <DynamicSemiCircle classes={classes} color={color} />;
    case 2:
      return (
        <DynamicSemiCircle classes={classes + " -scale-x-100"} color={color} />
      );
    case 3:
      return (
        <DynamicSemiCircle classes={classes + " -scale-y-100"} color={color} />
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
