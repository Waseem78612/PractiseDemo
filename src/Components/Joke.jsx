import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  // DEBUG: Check what props you're receiving
  console.log("Joke props:", props);
  console.log("Setup:", props.setup);
  console.log("Punchline:", props.punchline);
  console.log("isShown:", isShown);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }}>
      {props.setup && <h3>{props.setup}</h3>}

      {/* Show punchline when isShown is true */}
      {isShown && (
        <p
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "10px",
          }}
        >
          Punchline: "{props.punchline || "NO PUNCHLINE PROP PASSED!"}"
        </p>
      )}

      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
    </div>
  );
}
