import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/table";
import Filter from "../../components/Filter/filter";

const Mentors = () => {
    const users = [
        {
            id: 1,
            name: "Тимур Умаров",
            phone: "+998 (99) 999-99-99",
            status: "Оплачен",
            statusColor: "green",
            registrationDate: "06 апреля 2025",
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
            registrationDate: "06 апреля 2025",
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
            registrationDate: "06 апреля 2025",
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
            registrationDate: "06 апреля 2025",
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
            registrationDate: "06 апреля 2025",
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
            registrationDate: "06 апреля 2025",
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
            registrationDate: "06 апреля 2025",
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
            registrationDate: "06 апреля 2025",
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
            registrationDate: "06 апреля 2025",
            lastVisit: "06 апреля 2025",
            lessonProgress: "2 → 4",
            lessonsLeft: 3,
            progress: 100,
        },
        {
            id: 10,
            name: "Карина Кошева",
            phone: "+998 (99) 999-99-99",
            status: "Задолжен",
            statusColor: "blue",
            registrationDate: "06 апреля 2025",
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
            registrationDate: "06 апреля 2025",
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
            registrationDate: "06 апреля 2025",
            lastVisit: "06 апреля 2025",
            lessonProgress: "2 → 4",
            lessonsLeft: 3,
            progress: 50,
        },
    ];

    const navigate = useNavigate();

    const handleView = (user) => {
        navigate(`/mentors/${user.id}`);
    };

    const handleDelete = (user) => {

    };

    const handleEdit = (user) => {
    };

    return (
        <div>
            <h1 className="title">Пользователи</h1>
            <div className="wrapper">
                <Filter />
                <Table itemsPerPage={10} thead={["id", "Имя и Фамилия", "Номер телефона", "Дата регистрации", "Успеваемость", "Действия"]} data={users} onView={handleView} onDelete={handleDelete} onEdit={handleEdit} />
            </div>
        </div>
    )
}

export default Mentors