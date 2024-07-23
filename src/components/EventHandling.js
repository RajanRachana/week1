import React, { useState } from "react";

const EventHandling = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
  };

  const handleButtonClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div className="container mt-4 my-5">
      <h1 className="fw-bold fst-italic my-3">
        Day 6: Handling Events in React
      </h1>
      <h2>Event Handling in React </h2>

      <div className="mb-3">
        <button className="btn btn-primary mr-2" onClick={handleButtonClick}>
          Click Me
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputValue">Enter Something:</label>
          <input
            type="text"
            className="form-control"
            id="inputValue"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-success my-3">
          Submit
        </button>
        <div className="my-2">Answer: {submittedValue}</div>
      </form>
    </div>
  );
};

export default EventHandling;
