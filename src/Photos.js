import React from "react";
import "./Photos.css";

export default function Photos(props) {
  return (
    <div className="Photos">
      <section>
        <div className="row">
          {props.photos.map(function (photo, index) {
            if (props.photos) {
              return (
                <div key={index} className="col-4">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt=""></img>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    </div>
  );
}
