import "./CardImg.css"
import CardImgBtns from "../CardImgBtns/CardImgBtns"
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";
function CardImg({img,title}) {

 
  const [handClose,setHandClose]=useState(false);
  const handleClose = () => {
    setHandClose(!handClose);
  };

  return (
    <div className={!handClose ? "CardImg":"dNone"}>
      <h5>
      {title? title:"Картинка без надписи"}
      </h5>

      <img src={img?img:"https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg"} alt="" />

      <CardImgBtns/>

      <button className="btnAbs" onClick={handleClose}>  <RiCloseLargeLine></RiCloseLargeLine> </button>
    </div>
  )
}

export default CardImg