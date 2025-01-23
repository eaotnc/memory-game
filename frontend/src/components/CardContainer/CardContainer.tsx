import "./CardContainer.css";
import Card from "../Card";
import { useGameData } from "../../store/useGameData";

const CardContainer = () => {
  const { cards } = useGameData();

  return (
    <>
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
