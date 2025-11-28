import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1>{props.results.word}</h1>
          <h2>{props.results.phonetic}</h2>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          if (index < 5) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
