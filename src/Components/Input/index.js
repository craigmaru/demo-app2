import React from "react";
import { useState } from "react";

export default function Input({ getInput }) {
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleClick() {
    getInput(city);
  }

  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <button type="submit" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}
