import "./CardContainer.css";
import Card from "../Card";

const CardContainer = () => {
  const cards = [
    { key: 1, id: 2, imageUrl: "https://picsum.photos/id/238/200/300" },
    { key: 2, id: 8, imageUrl: "https://picsum.photos/id/244/200/300" },
    { key: 3, id: 1, imageUrl: "https://picsum.photos/id/237/200/300" },
    { key: 4, id: 2, imageUrl: "https://picsum.photos/id/238/200/300" },
    { key: 5, id: 3, imageUrl: "https://picsum.photos/id/239/200/300" },
    { key: 6, id: 3, imageUrl: "https://picsum.photos/id/239/200/300" },
    { key: 7, id: 1, imageUrl: "https://picsum.photos/id/237/200/300" },
    { key: 8, id: 4, imageUrl: "https://picsum.photos/id/240/200/300" },
    { key: 9, id: 5, imageUrl: "https://picsum.photos/id/241/200/300" },
    { key: 10, id: 4, imageUrl: "https://picsum.photos/id/240/200/300" },
    { key: 11, id: 6, imageUrl: "https://picsum.photos/id/242/200/300" },
    { key: 12, id: 6, imageUrl: "https://picsum.photos/id/242/200/300" },
    { key: 13, id: 7, imageUrl: "https://picsum.photos/id/243/200/300" },
    { key: 14, id: 5, imageUrl: "https://picsum.photos/id/241/200/300" },
    { key: 15, id: 8, imageUrl: "https://picsum.photos/id/244/200/300" },
    { key: 16, id: 7, imageUrl: "https://picsum.photos/id/243/200/300" },
  ];

  return (
    <>
      <div className="card-container" style={{ columns: 4 }}>
        {cards.map((card, index) => (
          <Card index={index} id={card.id} imageUrl={card.imageUrl} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
