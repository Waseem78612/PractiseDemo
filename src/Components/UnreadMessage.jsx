import React from "react";

export default function UnreadMessage() {
  const [messages, setMessages] = React.useState(["one", "two", "three"]);
  function changeText() {
    if (messages === 0) {
      return `You are all caught up`;
    } else if (messages === 1) {
      return `You have unread message`;
    } else {
      return `You have ${messages.length} message`;
    }
  }
  return (
    <div>
      <h1>{changeText()}</h1>
    </div>
  );
}
