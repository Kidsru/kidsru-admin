import "./Profil2.css";
import { BiPencil } from "react-icons/bi";

function Profil2({user}) {
  return (
    <div className="Profil2_wrp">
      <div className="Profil_text">
        <h4>
          Возраст:
          <span>8</span>
        </h4>
        <h4>
          Номер телефона родителя:<span>+998 (99) 999-99-99</span>
        </h4>
        <h4>
          Дата регистрации:<span>17 апреля 2025 года</span>
        </h4>
      </div>
      <div className="wrpBtn">
        <button>Изменить <BiPencil className="Pencil"></BiPencil></button>
      </div>
    </div>
  );
}

export default Profil2;
