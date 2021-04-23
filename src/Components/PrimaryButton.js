import React from "react";
import "../css/PrimaryButton.css";

function PrimaryButton(props) {
  return <button className="PB-btn btn-lg">{props.children}</button>;
}

export default PrimaryButton;
