import React, { useState } from "react";
import "./App.css";

import img1 from "./Components/images/Almonds.jpg";
import img2 from "./Components/images/Cocunut.jpg";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Avatar from "./Components/Avatar";
import SignUp from "./Components/SignUp";
import UnreadMessage from "./Components/UnreadMessage";
import Joke from "./Components/Joke";
import ChifClaude from "./Components/ChifClaude";
function App() {
  const jokesData = [
    {
      id: 1,
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!", // ← Make sure this exists
    },
    {
      id: 2,
      setup: "What do you call a fake noodle?",
      punchline: "An impasta!", // ← Make sure this exists
    },
  ];

  const images = [img1, img2];
  const [myFavouriteThing, setMyFavouriteThing] = useState([]);
  const allFavouriteThings = ["Peach", "Watermellon", "Tomato"];
  const thingsElement = myFavouriteThing.map((thing) => (
    <p key={thing}>{thing}</p>
  ));
  function addFavouriteThing() {
    setMyFavouriteThing((preFavThings) => [
      ...preFavThings,
      allFavouriteThings[preFavThings.length],
    ]);
  }

  return (
    <>
      <Header />
      <button onClick={addFavouriteThing}>AddItem</button>
      <section aria-live="polito">{thingsElement}</section>

      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
      <ChifClaude />
      <Counter />
      <Avatar />
      <SignUp />

      {jokesData.map((joke) => (
        <Joke
          key={joke.id}
          setup={joke.setup}
          punchline={joke.punchline} // ← THIS LINE IS MISSING!
        />
      ))}

      <UnreadMessage />
    </>
  );
}

export default App;
