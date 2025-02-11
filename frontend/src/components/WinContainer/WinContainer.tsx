import "./WinContainer.css";
import crown from "../../assets/crown.svg";
import useGameController from "../../store/useGameController";
import { FormEvent, useState } from "react";
import { useGameData } from "../../store/useGameData";
import Timer from "../Timer";

const WinContainer = () => {
  const { setRestart, totalClicks, playingTimeInSeconds } = useGameController();
  const gameData = useGameData();
  const { error, errorData } = gameData;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await gameData.submitUserScore({
      name: e.currentTarget.userName.value,
      clicks: totalClicks,
      timesInSeconds: playingTimeInSeconds,
    });
    gameData.fetchScores();
    setIsSubmitted(true);
  };

  const renderSubmitLoading = () => {
    if (error) {
      return <p>Error fetching data: {errorData}</p>;
    }
  };

  return (
    <div className="win-container">
      <img className="w-40" src={crown} />
      <h1>YOU WIN!</h1>
      {renderSubmitLoading()}
      {isSubmitted ? (
        <div className="pt-8">
          <div className="text-xl">Score Submitted!</div>
          <div>Thank you for playing</div>
        </div>
      ) : (
        <>
          <div className="pt-8 text-xl font-bold">Submit Your Score</div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input name="userName" required placeholder="Enter your name" />
            <button>Submit</button>
          </form>
        </>
      )}

      <div className="text-md flex justify-around">
        Total Clicks: {totalClicks} <Timer />
      </div>
      <button className="mt-5" onClick={setRestart}>
        Play Again
      </button>
    </div>
  );
};
export default WinContainer;
