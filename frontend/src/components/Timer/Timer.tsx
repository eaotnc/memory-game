import { useEffect } from "react";
import useGameController from "../../store/useGameController";
const Timer = () => {
  const { isStart, addTime, playingTimeInSeconds } = useGameController();

  useEffect(() => {
    let interval: number | undefined;
    if (isStart) {
      interval = setInterval(() => {
        addTime();
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isStart]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return <div>Time: {formatTime(playingTimeInSeconds)}</div>;
};
export default Timer;
