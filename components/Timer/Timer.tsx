import { useState, useEffect, FC, Fragment, MouseEvent } from "react";
import { Button } from "../../components";

const Timer: FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId: any = null;
    if (isOn) {
      intervalId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isOn]);

  const startTimer = (e: MouseEvent) => {
    setIsOn(true);
  };

  const pauseTimer = (e: MouseEvent) => {
    setIsOn(false);
  };

  const resetTimer = (e: MouseEvent) => {
    setIsOn(false);
    setTime(0);
  };

  const getTime = () => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    let h = `${hours < 10 ? "0" : ""}${hours}`;
    let m = `${minutes < 10 ? "0" : ""}${minutes}`;
    let s = `${seconds < 10 ? "0" : ""}${seconds}`;

    return [h, m, s];
  };

  return (
    <div className="flex flex-col gap-4 mx-auto">
      <div className="flex items-center justify-between gap-4 px-8 mx-auto">
        {getTime().map((t: string, index: number) => (
          <Fragment key={index}>
            {index !== 0 && (
              <p className="text-5xl md:text-7xl text-sky-600 mb-2">:</p>
            )}
            <p className="text-5xl md:text-6xl lg:text-7xl">{t}</p>
          </Fragment>
        ))}
      </div>
      <div className="h-6 my-2">
        {time > 0 && !isOn && (
          <p className="text-lg md:text-2xl lg:text-3xl text-center text-gray-700">
            Paused
          </p>
        )}
      </div>
      <div className="flex gap-4 my-2 w-full">
        <Button onClick={startTimer} title="start" />
        <Button onClick={pauseTimer} title="pause" />
        <Button onClick={resetTimer} title="Reset" />
      </div>
    </div>
  );
};

export default Timer;
