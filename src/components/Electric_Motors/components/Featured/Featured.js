import React from "react";
import Title from "../Title/Title";

import "./Featured.scss";
function Featured(props) {
  return (
    <div className="col-lg-3">
      <div className="fetr__card ">
        <div className="card__img">
          <img src={props.bike} alt="" />
        </div>
        <h5>{props.name}</h5>
      </div>
    </div>
  );
}

export default Featured;
