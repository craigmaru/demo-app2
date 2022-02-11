import React from "react";
import { useState } from "react";

export default function Input() {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <button type="submit">Search</button>
    </div>
  );
}
