import React from "react";
import "./PaymentStatus.css"
function BtnGrey({ text }) {
  return (
    <div>
      <button className="btn grey">
        <div className="dotGrey dot"></div>{text || "Просрочен"}
      </button>
    </div>
  );
}

export default BtnGrey;
