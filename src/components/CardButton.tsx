interface Props {
  type: String;
  text: String;
}

import "./card-button.css";

export default function ({ type, text }: Props) {
  return (
    <>
      <button className={`action-btn ${type}`} type="button">
        {text}
      </button>
    </>
  );
}
