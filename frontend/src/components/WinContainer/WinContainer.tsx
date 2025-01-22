import "./WinContainer.css";
import crown from "../../assets/crown.svg";
import useGameController from "../../store/useGameController";
import { useState } from "react";

const WinContainer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { setRestart } = useGameController();
  return (
    <div className="win-container">
      <img className="w-40" src={crown} />
      <h1>YOU WIN!</h1>
      <div className="pt-8">Submit Your Score</div>
      <input placeholder="Enter your name" />
      <button>Submit</button>
      {isSubmitted && (
        <button className="pt-5" onClick={setRestart}>
          Play Again
        </button>
      )}
    </div>
  );
};
export default WinContainer;
