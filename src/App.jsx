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

function App() {
  const [count, setCount] = useState(0);
  function addValue() {
    if (count >= 0 && count < 10) {
      setCount(count + 1);
    }
  }
  function removeValue() {
    if (count > 0) setCount(count - 1);
  }
  const jokesData = [
    {
      id: 1,
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!", 
    },
    {
      id: 2,
      setup: "What do you call a fake noodle?",
      punchline: "An impasta!", 
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
      <div className="counterContainer">
      <Counter number={count}/>
        <h1>Counter</h1>
        <button className="subBtn" onClick={removeValue}>
          -
        </button>
        <button className="plusBtn" onClick={addValue}>
          +
        </button>
        
      </div>
      
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
