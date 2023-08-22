interface Props {
  card: { image: string; name: string; message: string };
}
import { ChangeEvent, useState } from "react";
import CardButton from "./CardButton";
import ImagePicker from "./ImagePicker";
import "./birthday-card.css";

export default function BirthdayCard({ card }: Props) {
  const [birthdayMessage, setBirthdayMessage] = useState("");
  const handleBirthdayMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthdayMessage(e.target.value);
  };

  return (
    <div className="birthday-card">
      <ImagePicker imageUrl={card.image} />

      <div className="txt-container">
        <h3>{card.name}</h3>
        <input
          value={birthdayMessage !== "" ? birthdayMessage : card.message}
          onChange={handleBirthdayMessage}
        />
      </div>
      <div className="actions">
        <CardButton type="primary-btn" text="post" />
        <CardButton type="primary-btn" text="update" />
      </div>
    </div>
  );
}
