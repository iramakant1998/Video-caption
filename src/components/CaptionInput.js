import React, { useState } from "react";

const CaptionInput = ({ addCaption }) => {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCaption({ text, startTime, endTime });
    setText("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Caption text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Start time (in seconds)"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="End time (in seconds)"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <button type="submit">Add Caption</button>
    </form>
  );
};

export default CaptionInput;
