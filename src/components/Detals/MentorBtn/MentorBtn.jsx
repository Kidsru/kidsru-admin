import "./MentorBtn.css"
import { FaPlus } from "react-icons/fa";
function MentorBtn({ text, handleClick }) {
  return (
    <div>
      <button onClick={handleClick} className="MentorBtn"><FaPlus></FaPlus>{text || "Отметить себя"}</button>
    </div>
  )
}

export default MentorBtn