import "./variantCard.css"
import CardImgBtns from "../CardImgBtns/CardImgBtns"
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";
import AnswerTextarea from "../AnswerTextarea/AnswerTextarea";
function VariantCard({img,title}) {

 
  const [handClose,setHandClose]=useState(false);
  const handleClose = () => {
    setHandClose(!handClose);
  };

  return (
    <div className={!handClose ? "variantCard":"dNone"}>
      <h5>
      {title? title:"Вариант №1"}
      </h5>

      <img src={img?img:"https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg"} alt="" />

      <CardImgBtns/>

      <button className="btnAbs" onClick={handleClose}>  <RiCloseLargeLine></RiCloseLargeLine> </button>
       <AnswerTextarea></AnswerTextarea>

    </div>
  )
}

export default VariantCard