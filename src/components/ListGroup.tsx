import { useState } from "react";
interface Props {
  items: String[];
  heading: String;
}

export default function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            key={i}
            onClick={() => setSelectedIndex(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

//W3TaqOHQiGnxzTf0
