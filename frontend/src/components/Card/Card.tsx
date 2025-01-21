import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import cardIcon from "../../assets/cardicon.svg";
import useGameInfo from "../../store/gameInfo";

interface CardProps {
  id: number;
  index: number;
  imageUrl: string;
}

const Card = ({ id, imageUrl, index }: CardProps) => {
  const { addTotalClick, faceUpCards, pairedCards, handleGameLogic } =
    useGameInfo();
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    const isCardFaceUp = faceUpCards.some((card) => card.index === index);
    if (isCardFaceUp) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  }, [faceUpCards]);

  const handleClick = () => {
    addTotalClick();
    handleGameLogic(index, id);
  };
  return (
    <div key={index}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card flex justify-center" onClick={() => handleClick()}>
          <img className="w-8 rounded-md" src={cardIcon} />
        </div>
        <div key={id} className="card">
          <img className="rounded-md" key={id} src={imageUrl} />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
