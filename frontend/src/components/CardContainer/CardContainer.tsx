import "./CardContainer.css";
import Card from "../Card";
import useGameController from "../../store/useGameController";

const CardContainer = () => {
  const { cards } = useGameController();

  return (
    <>
      <div className="card-container" style={{ columns: 4 }}>
        {cards.map((card, key) => (
          <Card key={key} index={key} id={card.id} imageUrl={card.imageUrl} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
