import React from "react";

function EventCard({ onBook, onUnJoin, onPass }) {
  console.log("Child Component Rendered!");

  return (
    <div
      style={{
        border: "2px solid black",
        width: "250px",
        padding: "10px",
        margin: "auto",
      }}
    >
      <h3>Music Event</h3>
      <button onClick={onBook}>Book Event</button>
      <button onClick={onUnJoin}>Unjoin</button>
      <button onClick={onPass}>Pass</button>
    </div>
  );
}

export default EventCard;

