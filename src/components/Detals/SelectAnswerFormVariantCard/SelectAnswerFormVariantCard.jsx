import "./SelectAnswerFormVariantCard.css";
import AnswerTextarea from "../AnswerTextarea/AnswerTextarea";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import CheckboxForAnswer from "../CheckboxForAnswer/CheckboxForAnswer";

function SelectAnswerFormVariantCard({imgSrc}) {

      const [handClose,setHandClose]=useState(false);
      const handleClose = () => {
        setHandClose(!handClose);
      };


      const [check,setcheck]=useState(false);

      const handCheck=()=>{
        setcheck(!check)
      }
  return (
    <div className={!handClose ? "SelectAnswerFormVariantCard" : "dNone"}>
      <h3>Вариант №2</h3>

      <div className="wrpImgAndBtn">
        <img
          src={imgSrc? imgSrc:"https://img.freepik.com/free-vector/watercolor-summer-night-illustration-with-swing-tree_23-2149459683.jpg"}
          alt="img"
        />
        <div>
          <button className="btnTextSelect">
            Изменить<MdOutlineModeEdit></MdOutlineModeEdit>
          </button>
          <button className="btnTextSelect">
            Скачать <MdOutlineFileDownload></MdOutlineFileDownload>
          </button>
          <button className="btnTextSelect CardImgBtnsIconDelet">
            Удалить <RiDeleteBinLine></RiDeleteBinLine>
          </button>
        </div>
      </div>
      <AnswerTextarea></AnswerTextarea>
   {/* checkGreen */}
     
    
   <CheckboxForAnswer></CheckboxForAnswer>


      <button className="btnAbs" onClick={handleClose}>  <RiCloseLargeLine></RiCloseLargeLine> </button>
    </div>
    
  );
}

export default SelectAnswerFormVariantCard;
