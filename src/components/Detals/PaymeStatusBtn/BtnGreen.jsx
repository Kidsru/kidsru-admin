import React from "react";
import "./PaymentStatus.css"
function BtnGreen({ text }) {
  return (
    <div>
      <button className="btn green">
        <div className="dotGreen dot"></div>{text || "Оплачен"}
      </button>
    </div>
  );
}

export default BtnGreen;
