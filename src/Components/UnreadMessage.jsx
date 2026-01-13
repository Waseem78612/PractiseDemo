import React from "react";

export default function UnreadMessage() {
  const [UnreadMessage, setUnreadMessage] = React.useState(0);
  function handleUnread() {
    setUnreadMessage((prevVal) => (prevVal === 0 ? 1 : 0));
  }
  return (
    <div>
      {UnreadMessage !== 0 && <h1>You Have Unread Message</h1>}
      {UnreadMessage === 0 && <p>You Have No Unread Message</p>}

      <button onClick={handleUnread}>ChangeMessage</button>
    </div>
  );
}
