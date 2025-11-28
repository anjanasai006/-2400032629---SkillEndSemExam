import React, { useState, useCallback } from "react";
import EventCard from "./EventCard";

function App() {
  const [status, setStatus] = useState("Not Joined");

  const handleBookEvent = useCallback(() => {
    setStatus("Booked");
    console.log("Book Event Handler Executed!");
  }, []);

  const handleUnJoin = useCallback(() => {
    setStatus("Unjoined");
    console.log("Unjoin Handler Executed!");
  }, []);

  const handlePassEvent = useCallback(() => {
    setStatus("Passed");
    console.log("Pass Handler Executed!");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Event Booking Portal</h1>
      <h2>Current Status: {status}</h2>

      <EventCard
        onBook={handleBookEvent}
        onUnJoin={handleUnJoin}
        onPass={handlePassEvent}
      />
    </div>
  );
}

export default App;

