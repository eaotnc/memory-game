import "./App.css";
import CardContainer from "./components/CardContainer";
import Timer from "./components/Timer";
import useGameController from "./store/useGameController";

function App() {
  const { totalClicks, setRestart } = useGameController();

  return (
    <>
      <div className="text-2xl ">Memory Matching Game</div>
      <div className="text-md flex justify-around">
        Total Clicks: {totalClicks} <Timer />
      </div>

      <CardContainer />
      <button onClick={setRestart}>Restart</button>
    </>
  );
}

export default App;
