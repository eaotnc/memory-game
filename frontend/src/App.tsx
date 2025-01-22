import { useEffect } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Timer from "./components/Timer";
import useGameController from "./store/useGameController";

function App() {
  const { totalClicks, setRestart, pairedCards, isWin, setWinGame } =
    useGameController();

  useEffect(() => {
    if (pairedCards.length === 16) {
      setWinGame();
    }
  }, [pairedCards]);

  return (
    <>
      <div className="text-2xl ">Memory Matching Game</div>
      <div className="text-md flex justify-around">
        Total Clicks: {totalClicks} <Timer />
      </div>
      <>
        {pairedCards.length}
        {pairedCards.length === 16 ? "win" : "no"}
      </>
      {isWin ? <div>Win</div> : <CardContainer />}
      <button onClick={setRestart}>Restart</button>
    </>
  );
}

export default App;
