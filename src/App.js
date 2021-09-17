import { useState } from "react";
import "./styles.css";

var emojis = {
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍋 ": "Lemon",
  "🍌": "Banana",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn"
};

var emojisList = Object.keys(emojis);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    console.log(event.target.value);
    var emoji = event.target.value.trim();
    if (emoji in emojis === true) {
      console.log(emojis[emoji]);
      setMeaning(emojis[emoji]);
    } else {
      setMeaning("Meaning not found");
    }
  }

  function emojiClickHandler(emoji) {
    if (emoji in emojis === true) {
      console.log(emojis[emoji]);
      setMeaning(emojis[emoji]);
    } else {
      setMeaning("Meaning not found");
    }
  }

  return (
    <div className="App">
      <h1>Food & Drink</h1>
      <input onChange={inputHandler} type="text" />
      <h2> {meaning} </h2>
      <div>
        {emojisList.map((item) => {
          return (
            <span
              onClick={() => emojiClickHandler(item)}
              key={item}
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
                padding: "0.5rem"
              }}
            >
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
