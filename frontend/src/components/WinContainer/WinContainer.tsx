import "./WinContainer.css";
import crown from "../../assets/crown.svg";
import useGameController from "../../store/useGameController";
import { FormEvent, useState } from "react";

const WinContainer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { setRestart } = useGameController();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="win-container">
      <img className="w-40" src={crown} />
      <h1>YOU WIN!</h1>

      {isSubmitted ? (
        <button className="pt-5" onClick={setRestart}>
          Play Again
        </button>
      ) : (
        <>
          <div className="pt-8">Submit Your Score</div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input placeholder="Enter your name" />
            <button>Submit</button>
          </form>
        </>
      )}
    </div>
  );
};
export default WinContainer;
