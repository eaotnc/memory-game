import { useEffect } from "react";
import useGameController from "../../store/useGameController";
import { formatTimeToMinute } from "../../helpers";
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

  return (
    <div className="ml-4">Time: {formatTimeToMinute(playingTimeInSeconds)}</div>
  );
};
export default Timer;
