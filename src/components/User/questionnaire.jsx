import { useNavigate } from "react-router-dom";
import Table from "../Table/table";
import styles from "./user.module.css"

function Questionnaire() {
  const users = [
    {
      mentor: 10,
      id: 1,
      name: "Тимур Умаров",
      statusColor: "green",
      reason: ["Свободная коммуникация", "Смотреть видео", "Слушать музыку"],
      knowledge: "Не знаю",
      development: ["Говорить", "Читать", "Писать"],
      time: "15 минут"
    },
    {
      id: 2,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "В ожидании",
      statusColor: "blue",
      reason: ["Свободная коммуникация",],
      knowledge: "Не знаю",
      development: ["Говорить", "Читать"],
      time: "20 минут"
    },
    {
      id: 3,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "Просрочен",
      statusColor: "blue",
      reason: ["Слушать музыку", "Читать книги", "Писать и понимать"],
      knowledge: "Отлично владею",
      development: ["Писать", "Слушать"],
      time: "Я не уверен"
    },
    {
      id: 4,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      reason: ["Писать и понимать"],
      knowledge: "Знаю хорошо",
      development: "Писать",
      development: ["Слушать"],
      time: "30 минут"
    },
    {
      id: 5,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      knowledge: "Знаю хорошо",
      reason: ["Слушать музыку", "Читать книги", "Писать и понимать"],
      development: ["Говорить", "Слушать"],
      time: "15 минут"
    },
    {
      id: 6,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      reason: ["Свободная коммуникация", "Писать и понимать"],
      knowledge: "Не знаю",
      development: ["Говорить", "Читать", "Грамматика", "Писать", "Слушать"],
      time: "Я не уверен (а)"
    },
    {
      id: 7,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      reason: ["Читать книги", "Писать и понимать"],
      knowledge: "Отлично владею",
      development: ["Говорить", "Читать", "Грамматика", "Писать", "Слушать"],
      time: "20 минут"
    },
    {
      id: 8,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      reason: ["Свободная коммуникация"],
      knowledge: "Знаю хорошо",
      development: ["Говорить", "Читать", "Грамматика", "Писать", "Слушать"],
      time: "15 минут"
    },
    {
      id: 9,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      reason: ["Свободная коммуникация", "Смотреть видео",],
      knowledge: "Понимаю немного",
      development: ["Говорить", "Читать", "Грамматика", "Писать", "Слушать"],
      time: "30 минут"
    },
    {
      id: 10,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      reason: ["Свободная коммуникация", "Читать книги", "Писать и понимать"],
      knowledge: "Отлично владею",
      development: ["Писать", "Слушать"],
      time: "20 минут"
    },
    {
      id: 11,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      reason: ["Свободная коммуникация"],
      knowledge: "Знаю хорошо",
      development: ["Говорить", "Писать", "Слушать"],
      time: "Я не уверен"
    },
    {
      id: 12,
      name: "Карина Кошева",
      mentor: 10,
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      reason: ["Слушать музыку", "Читать книги"],
      knowledge: "Понимаю немного",
      development: ["Говорить", "Читать", "Грамматика"],
      time: "20 минут"
    },
  ];

  const navigate = useNavigate();

  const handleView = (user) => {
    navigate(`/user/${user.id}`);
  };

  const handleDelete = (user) => {

  };

  const handleEdit = (user) => {
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Пользователи / Опросник</h1>
      <div className={styles.wrapper}>
        <Table questionnaire={true} itemsPerPage={10} thead={["id", "Имя и Фамилия", "Ментор", "Зачем изучать русский язык?", "Знание языка", "Навык для развития", "Время на занятия", "Действия"]} data={users} onView={handleView} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default Questionnaire