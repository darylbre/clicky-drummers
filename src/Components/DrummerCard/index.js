import React from "react";
import "./style.css";

function DrummerCard(props) {
  return (
    <div key={props.id}>
      <img className="drummerImg" src={props.image} alt={props.image} onClick={() => props.handleClick(props.id)}/>
    </div>
  );
}

export default DrummerCard;
