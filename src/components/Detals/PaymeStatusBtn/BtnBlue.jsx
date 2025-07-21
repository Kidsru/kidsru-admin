import React from "react";
import "./PaymentStatus.css"
function BtnBlue({text}) {
  return (
    <div>
      <button className="btn blue">
        <div className="dotBlue dot"></div>{text ||"В ожидании"}
      </button>
    </div>
  );
}

export default BtnBlue;