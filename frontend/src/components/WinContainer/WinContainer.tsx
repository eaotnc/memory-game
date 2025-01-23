import "./WinContainer.css";
import crown from "../../assets/crown.svg";
import useGameController from "../../store/useGameController";
import { FormEvent } from "react";
import { useGameData } from "../../store/useGameData";

const WinContainer = () => {
  const { setRestart, totalClicks, playingTimeInSeconds } = useGameController();
  const gameData = useGameData();
  const { loading, error, errorData } = gameData;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await gameData.submitUserScore({
      name: e.currentTarget.userName.value,
      clicks: totalClicks,
      timesInSeconds: playingTimeInSeconds,
    });
    gameData.fetchScores();
  };

  const renderSubmitLoading = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error fetching data: {errorData}</p>;
    }
  };

  return (
    <div className="win-container">
      <img className="w-40" src={crown} />
      <h1>YOU WIN!</h1>

      <>
        {renderSubmitLoading()}
        <div className="pt-8">Submit Your Score</div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input name="userName" placeholder="Enter your name" />
          <button>Submit</button>
        </form>
      </>
      <button className="mt-5" onClick={setRestart}>
        Play Again
      </button>
    </div>
  );
};
export default WinContainer;
