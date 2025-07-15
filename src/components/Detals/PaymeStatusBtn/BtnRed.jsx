import React from "react";
import "./PaymentStatus.css"
function BtnRed({ text }) {
  return (
    <div>
      <button className="btn red">
        <div className="dotRed dot"></div>{text || "Задолжен"}
      </button>
    </div>
  );
}

export default BtnRed;
