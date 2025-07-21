import "./VariantCard2.css";
import CheckBoxForCard from "../CheckBoxForCard/CheckBoxForCard";
import AnswerTextarea from "../AnswerTextarea/AnswerTextarea";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";
function VariantCard2() {
    const [handClose,setHandClose]=useState(false);
      const handleClose = () => {
        setHandClose(!handClose);
      };
  return (
    <div className={!handClose ? "VariantCard2" : "dNone"}>
      <h3>Вариант №</h3>

      <div>
        <h4 className="h4">Реплики какого персонажа?</h4>
        <CheckBoxForCard></CheckBoxForCard>
      </div>

      <AnswerTextarea></AnswerTextarea>
       <button className="btnAbs" onClick={handleClose}>  <RiCloseLargeLine></RiCloseLargeLine> </button>
    </div>
  );
}

export default VariantCard2;
