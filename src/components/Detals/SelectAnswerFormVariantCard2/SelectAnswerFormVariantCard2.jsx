import { useState } from "react";
import "./SelectAnswerFormVariantCard2.css";
import CheckBoxForCard from "../CheckBoxForCard/CheckBoxForCard";
import AnswerTextarea from "../AnswerTextarea/AnswerTextarea";
import CheckboxForAnswer from "../CheckboxForAnswer/CheckboxForAnswer";
import { RiCloseLargeLine } from "react-icons/ri";


function SelectAnswerFormVariantCard2({ number }) {
  const [handClose, setHandClose] = useState(false);
  const handleClose = () => {
    setHandClose(!handClose);
  };
  return (
    <div className={!handClose ? "SelectAnswerFormVariantCard2" : "dNone"}>
      <h3>Вариант Вариант №{number ? number : 1}</h3>

      <div>
        <h3>Реплики какого персонажа?</h3>
        <CheckBoxForCard></CheckBoxForCard>
      </div>
      <AnswerTextarea title={"Привет"}></AnswerTextarea>
      <CheckboxForAnswer></CheckboxForAnswer>
      <button className="btnAbs" onClick={handleClose}>
        {" "}
        <RiCloseLargeLine></RiCloseLargeLine>{" "}
      </button>
    </div>
  );
}

export default SelectAnswerFormVariantCard2;
