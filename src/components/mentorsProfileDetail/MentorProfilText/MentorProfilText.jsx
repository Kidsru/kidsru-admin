import "./MentorProfilText.css";
import { MdOutlineEdit } from "react-icons/md";
import ProgressBar from "../../Detals/progressBar/progressBar";
function MentorProfilText() {
  return (
    <div className="MentorProfilText">
      <div className="wrpContent">
        <h4>
          Номер телефона:
          <span>+998 (99) 999-99-99</span>
        </h4>
      </div>
      <div className="wrpContent">
        <h4>
          Дата регистрации:<span>17 апреля 2025 года</span>
        </h4>
      </div>
      <div className="wrpContent">
        <h4>
          Успеваемость:
          <span className="wrpPg">
            {" "}
            <ProgressBar percent={25} width={"100px"} progressText={true} ></ProgressBar>
          </span>
          
        </h4>
      </div>
      <div className="wrpContent wrpBtn">
        <button>
          Изменить <MdOutlineEdit></MdOutlineEdit>{" "}
        </button>
      </div>
    </div>
  );
}

export default MentorProfilText;
