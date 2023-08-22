interface Props {
  cards: {
    image: string;
    name: string;
    message: string;
  }[];
}

import "./card-list.css";
import BirthdayCard from "./BirthdayCard";

export default function CardList({ cards }: Props) {
  return (
    <div>
      <div className="birthdays-container">
        {/* <div className="title-container">
          <h1>Today's Birthdays</h1>
        </div> */}
        <div className="card-list">
          {cards.map((card, index) => (
            <BirthdayCard card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
