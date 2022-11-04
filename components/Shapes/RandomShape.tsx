import { FC } from "react";
import { Circle, QuarterCircle, Triangle } from ".";
import dynamic from "next/dynamic";
import { getRandomInt } from "helpers";

interface Props {
  classes?: string;
  color?: string;
}

const RandomShape: FC<Props> = ({ classes = "", color = "" }) => {
  const DynamicTriangle = dynamic(() => import("./Triangle"), {
    ssr: false,
  });

  const DynamicCircle = dynamic(() => import("./Circle"), {
    ssr: false,
  });

  const DynamicQuarterCircle = dynamic(() => import("./QuarterCircle"), {
    ssr: false,
  });

  const allShapes = [
    <DynamicCircle classes={classes} color={color} key={0} />,
    <DynamicQuarterCircle classes={classes} color={color} key={1} />,
    <DynamicQuarterCircle
      classes={classes + " -scale-x-100"}
      color={color}
      key={2}
    />,
    <DynamicQuarterCircle
      classes={classes + " -scale-y-100"}
      color={color}
      key={3}
    />,
    <DynamicTriangle
      classes={classes + " -scale-x-100"}
      color={color}
      key={4}
    />,
    <DynamicTriangle
      classes={classes + " -scale-y-100"}
      color={color}
      key={5}
    />,
    <DynamicTriangle classes={classes} color={color} key={6} />,
  ];

  return allShapes[getRandomInt(allShapes.length)];
};

export default RandomShape;
