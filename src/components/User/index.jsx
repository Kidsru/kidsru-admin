import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import styles from "./user.module.css"
import Table from "../Table/table";
import { useNavigate, useSearchParams } from "react-router-dom";
import Filter from "../Filter/filter";
import { useEffect, useState } from "react";
import { apiConnector } from "../../services/apiconnector";
import { endpoints } from "../../services/api";

function getAccessTokenFromCookie() {
  const name = "access_token=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(name)) {
      return cookie.substring(name.length);
    }
  }

  return null;
}

function Index() {
  const [users, setUsers] = useState([]);
  const token = getAccessTokenFromCookie();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiConnector(
          "GET",
          endpoints.GET_USERS_API,
          null,
          {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        );

        console.log("Foydalanuvchilar:", response.data.data);
        setUsers(response.data.data);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    fetchUsers();
  }, []);

  const [inputValue, setInputValue] = useState("");

  const finalFilteredUsers = users?.filter((user) => {
    const lower = inputValue.toLowerCase();
    return (
      user.name.toLowerCase().includes(lower) ||
      user.phone.toLowerCase().includes(lower) ||
      user.id.toString().includes(lower)
    );
  });

  const navigate = useNavigate();

  const handleView = (user) => {
    navigate(`/user/${user.id}`);
  };

  const handleDelete = (id) => {
    console.log(id, "ID")    
  };

  const handleEdit = (user) => {
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Пользователи</h1>
      <div className={styles.wrapper}>
        <Filter onInputChange={setInputValue} number={users.length} filterField={{
          key: "status", label: "Статус", options: ["Просрочен", "Оплачен", "В ожидании", "Задолжен"]
        }} />
        <Table itemsPerPage={10} thead={["id", "Имя и Фамилия", "Номер телефона", "Статус оплаты", "Последний раз заходил", "Последний Урок → Игра", "Осталось уроков в модуле", "Успеваемость", "Действия"]} data={finalFilteredUsers} onView={handleView} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default Index