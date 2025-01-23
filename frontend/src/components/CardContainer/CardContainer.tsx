import Card from "../Card";
import { useGameData } from "../../store/useGameData";
import useGameController from "../../store/useGameController";
import Timer from "../Timer";

import "./CardContainer.css";

const CardContainer = () => {
  const { cards } = useGameData();
  const { totalClicks } = useGameController();

  return (
    <>
      <div className="text-md flex justify-around">
        Total Clicks: {totalClicks} <Timer />
      </div>
      <div className="card-container" style={{ columns: 4 }}>
        {!cards ? (
          <p>Loading...</p>
        ) : (
          cards.map((card, key) => (
            <Card key={key} index={key} id={card.id} imageUrl={card.imageURL} />
          ))
        )}
      </div>
    </>
  );
};

export default CardContainer;
