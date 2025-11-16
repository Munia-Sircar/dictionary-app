import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  function submitWord(event) {
    event.preventDefault();
    alert(word);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function apiCall(response) {
    console.log(response);
  }
  let key = "28d0bff0ffaa52b09e33da6etode543b";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=love&key=${key}`;

  axios.get(apiUrl).then(apiCall);

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
