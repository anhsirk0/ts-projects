import { useState, useEffect, FC, Fragment, MouseEvent } from "react";
import { Button } from "../../components";

const Countdown: FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId: any = null;
    if (isOn && time > 0) {
      intervalId = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isOn, time]);

  const startCountdown = (e: MouseEvent) => {
    if (time > 0) setIsOn(true);
  };

  const pauseCountdown = (e: MouseEvent) => {
    setIsOn(false);
  };

  const resetCountdown = (e: MouseEvent) => {
    setIsOn(false);
    setTime(0);
  };

  function getSeconds(): string {
    let seconds = time % 60;
    return `${seconds < 10 ? "0" : ""}${seconds}`;
  }

  function getMinutes(): string {
    let minutes = Math.floor(time / 60);
    return `${minutes < 10 ? "0" : ""}${minutes}`;
  }

  return (
    <div className="flex flex-col gap-4 mx-auto">
      <div className="flex items-center justify-between gap-4 px-8 mx-auto h-32">
        {isOn ? (
          <>
            <p className="text-5xl md:text-7xl p-2 w-28 text-center">
              {getMinutes()}
            </p>
            <p className="text-6xl text-sky-600 mb-2">: </p>
            <p className="text-5xl md:text-7xl p-2 w-28 text-center">
              {getSeconds()}
            </p>
          </>
        ) : (
          <>
            <input
              onChange={(e) => {
                setTime((t) => (t % 60) + 60 * (e.target.valueAsNumber % 60));
              }}
              className="text-7xl p-2 m-0 rounded-lg text-center bg-transparent w-28"
              type="number"
              min={0}
              max={60}
              value={getMinutes()}
            />
            <p className="text-6xl text-sky-600 mb-2">: </p>
            <input
              onChange={(e) => {
                setTime(
                  (t) => 60 * Math.floor(t / 60) + (e.target.valueAsNumber % 60)
                );
              }}
              className="text-7xl p-2 m-0 rounded-lg text-center bg-transparent w-28"
              type="number"
              min={0}
              max={60}
              value={getSeconds()}
              autoFocus
            />
          </>
        )}
      </div>
      <div className="h-6 my-2">
        {time > 0 && !isOn && (
          <p className="text-3xl text-center text-gray-700">Paused</p>
        )}
      </div>
      <div className="flex gap-4 my-2 w-full">
        <Button onClick={startCountdown} title="Start" />
        <Button onClick={pauseCountdown} title="Pause" />
        <Button onClick={resetCountdown} title="Reset" />
      </div>
    </div>
  );
};

export default Countdown;
