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
        }, 2000);
      }
    } else {
      setIsFlipped(false);
    }
  }, [faceUpCards]);

  // useEffect(() => {
  //   const isCardPaired = pairedCards.some((card) => card.index === index);
  //   setIsCorrect(isCardPaired);
  //   if (isCardPaired) {
  //     setIsFlipped(true);
  //   }
  // }, [pairedCards]);

  const handleClick = () => {
    addTotalClick();
    setGameStart();
    handleGameLogic(index, id);
  };
  return (
    <div key={index}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card flex justify-center" onClick={() => handleClick()}>
          <img className="w-8 rounded-md" src={cardIcon} />
        </div>
        <div
          key={id}
          className="card"
          style={isCorrect ? { border: "5px solid green" } : {}}
        >
          <img className="rounded-md" key={id} src={imageUrl} />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
