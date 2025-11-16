import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <h5>{props.meaning.definition}</h5>
    </div>
  );
}
