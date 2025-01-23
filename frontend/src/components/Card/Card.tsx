import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import cardIcon from "../../assets/cardIcon.svg";
import useGameController from "../../store/useGameController";

import "./Card.css";

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
    //INFO: Check if the card is face up or paired
    const isCardFaceUp = faceUpCards.some((card) => card.index === index);
    const isCardPaired = pairedCards.some((card) => card.index === index);
    setIsCorrect(isCardPaired);
    if (isCardFaceUp || isCardPaired) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  }, [faceUpCards, pairedCards]);

  useEffect(() => {
    //INFO: If the card is not paired, flip it back after 2 seconds
    if (faceUpCards.length > 0) {
      const timer = setTimeout(() => {
        faceUpCards.forEach((card) => removeFaceUpCards(card.index));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [faceUpCards, removeFaceUpCards]);

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
