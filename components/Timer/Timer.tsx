import { useState, useEffect, FC, MouseEvent } from "react";

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
    <div className="flex flex-col mx-auto">
      <div className="flex items-center justify-between gap-4 px-8 py-6 mx-auto mb-8 ring ring-2 ring-sky-400 rounded-lg">
        {getTime().map((t: string, index: number) => (
          <>
            {index !== 0 && <p className="text-6xl text-sky-600 mb-2">: </p>}
            <p key={index} className="text-7xl">
              {t}
            </p>
          </>
        ))}
      </div>
      <div className="h-12">
        {time > 0 && !isOn && (
          <p className="text-3xl text-center text-gray-700">Paused</p>
        )}
      </div>
      <div className="flex gap-4 p-4 my-4 mx-auto">
        <button
          onClick={startTimer}
          className="py-3 px-6 bg-sky-300 hover:bg-sky-400 rounded-lg shadow-lg"
        >
          Start
        </button>
        <button
          onClick={pauseTimer}
          className="py-3 px-6 bg-sky-300 hover:bg-sky-400 rounded-lg shadow-lg"
        >
          Pause
        </button>
        <button
          onClick={resetTimer}
          className="py-3 px-6 bg-sky-300 hover:bg-sky-400 rounded-lg shadow-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
