import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import styles from "./user.module.css"
import Table from "../Table/table";
import { useNavigate } from "react-router-dom";
import Filter from "../Filter/filter";

function Index() {
  const users = [
    {
      id: 1,
      name: "Тимур Умаров",
      phone: "+998 (99) 999-99-99",
      status: "Оплачен",
      statusColor: "green",
      lastVisit: "06 апреля 2025",
      lessonProgress: "1 → 2",
      lessonsLeft: 1,
      progress: 25,
    },
    {
      id: 2,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "В ожидании",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 2,
      progress: 50,
    },
    {
      id: 3,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "Просрочен",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 10,
      progress: 50,
    },
    {
      id: 4,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 3,
      progress: 50,
    },
    {
      id: 5,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 3,
      progress: 50,
    },
    {
      id: 6,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "Просрочен",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 3,
      progress: 50,
    },
    {
      id: 7,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 3,
      progress: 50,
    },
    {
      id: 8,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 3,
      progress: 50,
    },
    {
      id: 9,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 3,
      progress: 50,
    },
    {
      id: 10,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 3,
      progress: 50,
    },
    {
      id: 11,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 3,
      progress: 50,
    },
    {
      id: 12,
      name: "Карина Кошева",
      phone: "+998 (99) 999-99-99",
      status: "Задолжен",
      statusColor: "blue",
      lastVisit: "06 апреля 2025",
      lessonProgress: "2 → 4",
      lessonsLeft: 3,
      progress: 50,
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
      <h1 className={styles.title}>Пользователи</h1>
      <div className={styles.wrapper}>
        <Filter />
        <Table itemsPerPage={10} thead={["id", "Имя и Фамилия", "Номер телефона", "Статус оплаты", "Последний раз заходил", "Последний Урок → Игра", "Осталось уроков в модуле", "Успеваемость", "Действия"]} data={users} onView={handleView} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default Index