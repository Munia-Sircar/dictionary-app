import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  function submitWord(event) {
    event.preventDefault();
    alert(word);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={submitWord}>
        <input
          type="search"
          className="search-bar"
          placeholder="Search"
          onChange={handleWordChange}
        />
      </form>
    </div>
  );
}
