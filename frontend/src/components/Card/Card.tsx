import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import cardIcon from "../../assets/cardicon.svg";

interface CardProps {
  id: number;
  imageUrl: string;
}

const Card = ({ id, imageUrl }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className="card flex justify-center"
        onClick={() => setIsFlipped(true)}
      >
        <img className="w-8 rounded-md" src={cardIcon} />
      </div>
      <div key={id} className="card">
        <img className="rounded-md" key={id} src={imageUrl} />
      </div>
    </ReactCardFlip>
  );
};

export default Card;
