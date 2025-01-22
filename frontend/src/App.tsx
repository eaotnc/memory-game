import { useEffect } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Timer from "./components/Timer";
import useGameController from "./store/useGameController";
import WinContainer from "./components/WinContainer";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

function App() {
  const { totalClicks, setRestart, pairedCards, isWin, setWinGame } =
    useGameController();

  useEffect(() => {
    if (pairedCards.length === 16) {
      setWinGame();
    }
  }, [pairedCards]);

  return (
    <div className="app">
      <div className="header">Memory Matching Game</div>
      <div className="text-md flex justify-around">
        Total Clicks: {totalClicks} <Timer />
      </div>
      {!isWin ? (
        <>
          <WinContainer /> <LeaderBoard />
        </>
      ) : (
        <CardContainer />
      )}
      {!isWin ? null : (
        <button className="mt-0 mb-0 m-auto" onClick={setRestart}>
          Restart
        </button>
      )}
    </div>
  );
}

export default App;
