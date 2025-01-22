import "./WinContainer.css";
import crown from "../../assets/crown.svg";
import useGameController from "../../store/useGameController";

const WinContainer = () => {
  const { setRestart } = useGameController();
  return (
    <div className="win-container">
      <img src={crown} />
      <h1>YOU WIN!</h1>
      <button onClick={setRestart}>Play Again</button>
    </div>
  );
};
export default WinContainer;
