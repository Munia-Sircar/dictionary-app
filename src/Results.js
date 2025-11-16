import React from "react";
import "./Results.css";

export default function Results(props) {
  return (
    <div className="Results">
      <h3>{props.results.word}</h3>
      <h5>
        <em>{props.results.phonetic}</em>
      </h5>
      <h6>{props.results.meanings[0].definition}</h6>
    </div>
  );
}
