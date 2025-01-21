import "./App.css";
import CardContainer from "./components/CardContainer";
import useGameController from "./store/gameInfo";

function App() {
  const { totalClicks, setRestart } = useGameController();

  return (
    <>
      <div className="text-2xl ">Memory Matching Game</div>
      <div className="text-md">Total Clicks: {totalClicks}</div>
      <CardContainer />
      <button onClick={setRestart}>Restart</button>
    </>
  );
}

export default App;
