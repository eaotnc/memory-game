import { useEffect } from "react";
import CardContainer from "./components/CardContainer";
import useGameController from "./store/useGameController";
import WinContainer from "./components/WinContainer";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import { useGameData } from "./store/useGameData";

import "./App.css";

function App() {
  const gameData = useGameData();
  const {
    pairedCards,
    isWin,
    totalClicks,
    playingTimeInSeconds,
    setWinGame,
    setGameEnd,
    setRestart,
  } = useGameController();

  useEffect(() => {
    //INFO: Fetch cards and scores when the app is loaded
    gameData.fetchCards();
    gameData.fetchScores();
  }, []);

  useEffect(() => {
    //INFO: Check if all cards are paired and delay 0.5 second before showing the win screen
    if (pairedCards.length === 16) {
      gameData.keptUserScore({
        clicks: totalClicks,
        timesInSeconds: playingTimeInSeconds,
      });
      setGameEnd();
      setTimeout(() => {
        setWinGame();
      }, 500);
    }
  }, [pairedCards]);

  const handleRestart = () => {
    gameData.fetchCards();
    setRestart();
  };

  const renderGame = () => {
    const { loading, error, errorData } = gameData;

    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error fetching data: {errorData}</p>;
    } else if (isWin) {
      return (
        <>
          <WinContainer />
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
      {renderGame()}
      <LeaderBoard />
    </div>
  );
}

export default App;
