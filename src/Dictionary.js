import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Words from "./Words.jpg";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  let [results, setResults] = useState("");

  function apiCall(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function submitWord(event) {
    event.preventDefault();

    let key = "28d0bff0ffaa52b09e33da6etode543b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;

    axios.get(apiUrl).then(apiCall);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  if (results) {
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
        <Results results={results} />
      </div>
    );
  } else {
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
        <img src={Words} alt="Words" width="500" />
      </div>
    );
  }
}
