import "./AchievementsCart.css";
import ProgressBar from "../progressBar/progressBar";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
import img from "../../../assets/img/handshake.png"
function AchievementsCart({ data }) {
  return (
    <div className="Achievements">
      <div className="AchievementsCart">
        <img
          src={img}
          alt="#"
        />
        <div className="AchievmentsCartText">
          <div className="wrpMenu">
            <h4>{data?.title || "Мастер приветствий"}</h4>
            <button>
              <HiOutlineDotsHorizontal />
            </button>
          </div>
          <div className="WrpProgresBar">
            <div> <span>4</span>/4 уроков <span>100%</span></div>

            <ProgressBar width={300} percent={100}></ProgressBar>
          </div>
        </div>
      </div>
      {
        data?.notification && (
          <div className="alert">
            <FaRegBell></FaRegBell>
            <p>Новое достижение доступно</p>
          </div>
        )
      }
    </div>
  );
}

export default AchievementsCart;
