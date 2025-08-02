import "./Profil2.css";
import { BiPencil } from "react-icons/bi";

function Profil2({ age, phone, createdDate }) {
  function formatDateToRussian(dateString) {
    const months = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const date = new Date(dateString);

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year} года`;
  }


  return (
    <div className="Profil2_wrp">
      <div className="Profil_text">
        <h4>
          Возраст:
          <span>{age || 0}</span>
        </h4>
        <h4>
          Номер телефона родителя:<span>{phone || "+998 (99) 999-99-99"}</span>
        </h4>
        <h4>
          Дата регистрации:<span>{formatDateToRussian(createdDate)}</span>
        </h4>
      </div>
      <div className="wrpBtn">
        <button>Изменить <BiPencil className="Pencil"></BiPencil></button>
      </div>
    </div>
  );
}

export default Profil2;
