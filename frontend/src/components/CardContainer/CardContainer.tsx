import "./CardContainer.css";
import Card from "../Card";
import { useCard } from "../../store/useCards";

const CardContainer = () => {
  const { cards } = useCard();

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
