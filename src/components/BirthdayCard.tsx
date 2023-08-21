// interface Props {
//   card: { image: string; name: string; message: string };
// }
import CardButton from "./CardButton";
import ImagePicker from "./ImagePicker";
import "./birthday-card.css";

export default function BirthdayCard({ card, setcardState }) {
  return (
    <div className="birthday-card">
      <ImagePicker
        imageUrl={card.image}
        cards={card}
        setcardState={setcardState}
      />

      <div className="txt-container">
        <h3>{card.name}</h3>
        {/* <input value={card.message}onChange={}/> */}
      </div>
      <div className="actions">
        {/* <CardButton type="primary-btn" text="post" />
        <CardButton type="primary-btn" text="update" /> */}
      </div>
    </div>
  );
}
