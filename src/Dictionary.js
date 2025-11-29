import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Words from "./Words.jpg";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  let [results, setResults] = useState("");
  let [photos, setPhotos] = useState("");

  function apiCall(response) {
    setResults(response.data);
  }

  function imageApiCall(response) {
    setPhotos(response.data.photos);
  }

  function submitWord(event) {
    event.preventDefault();

    let key = "28d0bff0ffaa52b09e33da6etode543b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;

    axios.get(apiUrl).then(apiCall);

    let imageApiKey = "28d0bff0ffaa52b09e33da6etode543b";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imageApiKey}`;

    axios.get(imageApiUrl).then(imageApiCall);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  if (results && photos) {
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
        <Photos photos={photos} />
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
