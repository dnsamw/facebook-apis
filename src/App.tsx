import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import ImagePicker from "./components/ImagePicker";

export default function App() {
  const cards = [
    {
      name: "Nayomi Thakshila",
      message: "Happy Birthday Nayomi Thakshila 🍰❤️",
      image: "/images/nayomi-thakshila.jpg",
    },
    {
      name: "Piumi Boteju",
      message: "Happy Birthday Piumi Boteju 🍰❤️",
      image: "/images/piumi-boteju.jpg",
    },
    {
      name: "Nimmy Manohari",
      message: "Happy Birthday Nayomi Thakshila 🍰❤️",
      image: "/images/nimy-manohari.jpg",
    },
    {
      name: "Sandani Fernando",
      message: "Happy Birthday Sandani Fernando 🍰❤️",
      image: "/images/sandani-fernando.jpg",
    },
    {
      name: "Shalani Tharaka",
      message: "Happy Birthday Shalani Tharaka 🍰❤️",
      image: "/images/shalani-tharaka.jpg",
    },
    {
      name: "Shenaya Vanhoff",
      message: "Happy Birthday Shenaya Vanhoff 🍰❤️",
      image: "/images/shenaya-vanhoff.jpg",
    },
    {
      name: "Yashodha Wimaladharma",
      message: "Happy Birthday Yashodha Wimaladharma 🍰❤️",
      image: "/images/yashodha-vimaldharma.jpg",
    },
  ];

  const [cardstate, setCardstate] = useState([]);

  useEffect(() => {
    setCardstate(cards);
    console.log("UOGIUGILLDHLIKDNIHO:J:ODJ:OJD:OJ");
  }, []);

  return (
    <div className="app">
      <CardList cards={cardstate} setcardState={setCardstate} />
      {/* <ImagePicker /> */}
    </div>
  );
}
