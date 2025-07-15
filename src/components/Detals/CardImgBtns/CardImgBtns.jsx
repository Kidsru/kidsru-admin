import "./CardImgBtns.css"
import { MdOutlineEdit } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
function CardImgBtns() {
  return (
    <>
    
    <div className="CardImgBtns">
        <button className="CardImgBtnsIconEdit"><MdOutlineEdit/></button>
        <button className="CardImgBtnsIconDownload"> <LuDownload/> </button>
        <button className="CardImgBtnsIconDelet"> <RiDeleteBinLine/> </button>

    </div>
    
    </>
  )
}

export default CardImgBtns