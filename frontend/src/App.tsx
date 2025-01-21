import { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-2xl ">Memory Matching Game</div>
      <CardContainer />
    </>
  );
}

export default App;
