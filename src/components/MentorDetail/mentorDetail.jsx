import { useNavigate } from 'react-router-dom';
import MenTorProfil from '../mentorsProfileDetail/MentorProfil/MenTorProfil'
import MentorProfilText from '../mentorsProfileDetail/MentorProfilText/MentorProfilText'
import Filter from '../Filter/filter';
import Table from '../Table/table';

const MentorDetail = () => {
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
            beforePerformance: 20,
            afterPerformance: 40,
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
            beforePerformance: 20,
            afterPerformance: 40,
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
            beforePerformance: 20,
            afterPerformance: 40,
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
            beforePerformance: 20,
            afterPerformance: 40,
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
            beforePerformance: 20,
            afterPerformance: 40,
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
            beforePerformance: 20,
            afterPerformance: 40,
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
            beforePerformance: 20,
            afterPerformance: 40,
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
            beforePerformance: 20,
            afterPerformance: 40,
            progress: 50,
        },
        {
            id: 9,
            name: "Карина Кошева",
            phone: "+998 (99) 999-99-99",
            status: "Оплачен",
            statusColor: "blue",
            lastVisit: "06 апреля 2025",
            lessonProgress: "2 → 4",
            lessonsLeft: 3,
            beforePerformance: 20,
            afterPerformance: 40,
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
            beforePerformance: 20,
            afterPerformance: 40,
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
            beforePerformance: 20,
            afterPerformance: 40,
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
            beforePerformance: 20,
            afterPerformance: 40,
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
        <div>
            <h3 className='title'>Менторы</h3>
            <div style={{ display: 'flex', gap: "30px" }}>
                <MenTorProfil />
                <MentorProfilText />
            </div>
            <h4 style={{ marginTop: "41px" }} className='title2'>Обработанные пользователи</h4>
            <div className="wrapper">
                <Filter />
                <Table itemsPerPage={10} thead={["id", "Имя и Фамилия", "Номер телефона", "Статус оплаты", "Последний раз заходил", "Последний Урок → Игра", "Осталось уроков в модуле", "Успеваемость пользователя до обработки", "Успеваемость пользователя после обработки", "Действия"]} data={users} onView={handleView} onDelete={handleDelete} onEdit={handleEdit} />
            </div>
        </div>
    )
}

export default MentorDetail