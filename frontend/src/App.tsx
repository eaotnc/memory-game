import { useEffect } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Timer from "./components/Timer";
import useGameController from "./store/useGameController";
import WinContainer from "./components/WinContainer";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import { useGameData } from "./store/useGameData";

function App() {
  const getCardsData = useGameData();
  const { totalClicks, setRestart, pairedCards, isWin, setWinGame } =
    useGameController();

  useEffect(() => {
    getCardsData.fetchCards();
  }, []);

  useEffect(() => {
    if (pairedCards.length === 16) {
      setTimeout(() => {
        setWinGame();
      }, 1000);
    }
  }, [pairedCards]);

  const handleRestart = () => {
    getCardsData.fetchCards();
    setRestart();
  };

  const renderGame = () => {
    if (getCardsData.loading) {
      return <p>Loading...</p>;
    } else if (getCardsData.error) {
      return <p>Error fetching data: {getCardsData.errorData}</p>;
    } else if (isWin) {
      return (
        <>
          <WinContainer />
          <LeaderBoard />
        </>
      );
    } else {
      return (
        <>
          <CardContainer />
          <button className="mt-0 mb-0 m-auto" onClick={handleRestart}>
            Restart
          </button>
        </>
      );
    }
  };

  return (
    <div className="app">
      <div className="header">Memory Matching Game</div>
      <div className="text-md flex justify-around">
        Total Clicks: {totalClicks} <Timer />
      </div>
      {renderGame()}
    </div>
  );
}

export default App;
