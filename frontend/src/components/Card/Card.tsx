import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import cardIcon from "../../assets/cardicon.svg";
import useGameController from "../../store/useGameController";

interface CardProps {
  id: number;
  index: number;
  imageUrl: string;
}

const Card = ({ id, imageUrl, index }: CardProps) => {
  const {
    addTotalClick,
    faceUpCards,
    pairedCards,
    handleGameLogic,
    setGameStart,
    removeFaceUpCards,
  } = useGameController();
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    const isCardFaceUp = faceUpCards.some((card) => card.index === index);
    const isCardPaired = pairedCards.some((card) => card.index === index);
    setIsCorrect(isCardPaired);

    if (isCardFaceUp || isCardPaired) {
      setIsFlipped(true);
      if (isCardFaceUp && !isCorrect) {
        setTimeout(() => {
          removeFaceUpCards(index);
        }, 3500);
      }
    } else {
      setIsFlipped(false);
    }
  }, [faceUpCards, pairedCards]);

  const handleClick = () => {
    addTotalClick();
    setGameStart();
    handleGameLogic(index, id);
  };
  return (
    <div key={index}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card flex justify-center" onClick={() => handleClick()}>
          <div className="card-image flex justify-center items-center">
            <img className="w-8 rounded-md" src={cardIcon} />
          </div>
        </div>
        <div
          key={id}
          className="card"
          style={isCorrect ? { border: "5px solid green" } : {}}
        >
          <img className="card-image" key={id} src={imageUrl} />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
