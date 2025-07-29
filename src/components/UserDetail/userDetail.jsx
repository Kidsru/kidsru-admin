import { useParams } from "react-router-dom";
import styles from "./userDetail.module.css"
import Profil from "../Detals/Profil/Profil";
import Profil2 from "../Detals/Profil2/Profil2";
import InternetBtnZero from "../Detals/InternetBtn/InternetZero";
import InternetBtnSlow from '../Detals/InternetBtn/InternetBtnSlow'
import InternetBtnNormal from '../Detals/InternetBtn/InternetBtnNormal'
import InternetBtnGood from '../Detals/InternetBtn/InternetBtnGood'
import Table from "../Table/table";
import AchievementsCart from "../Detals/AchievementsCart/AchievementsCart";
import Filter from "../Filter/filter";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";
import Calendar from "../Detals/Calendar/main";

const UserDetail = () => {
    const { id } = useParams()
    const user = {
        id: 12,
        name: "Карина Кошева",
        mentor: 10,
        phone: "+998 (99) 999-99-99",
        status: "Задолжен",
        statusColor: "blue",
        reason: ["Свободная коммуникация", "Слушать музыку", "Читать книги"],
        knowledge: "Понимаю немного",
        development: ["Говорить", "Читать", "Грамматика"],
        time: "20 минут"
    }

    const data = [
        {
            id: 'C1',
            name: 'Курс',
            status: 'В процессе',
            createdAt: '06 апреля 2025',
            progress: 25,
            children: [
                {
                    id: 'M1',
                    name: 'Модуль 1',
                    status: 'В процессе',
                    createdAt: '06 апреля 2025',
                    progress: 25,
                    children: [
                        {
                            id: 'B1',
                            name: 'Блок 1. “Знакомство”',
                            status: 'В процессе',
                            createdAt: '06 апреля 2025',
                            progress: 25,
                            children: [
                                {
                                    id: 'L1',
                                    name: 'Урок 1. “Привет”',
                                    status: 'Создан',
                                    createdAt: '06 апреля 2025',
                                    progress: 100,
                                    children: [
                                        {
                                            id: 'G1',
                                            name: 'Игра 1. “Повторяй за мной”',
                                            status: 'Остановлен',
                                            createdAt: '06 апреля 2025',
                                            progress: 50
                                        },
                                        {
                                            id: 'G2',
                                            name: 'Игра 2. “Кому какое приветствие?”',
                                            status: 'Не начат',
                                            createdAt: '06 апреля 2025',
                                            progress: 0
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    const data2 = [
        {
            id: "1M1",
            modul: "Модуль 1",
            status: "Оплачен",
            purchaseDate: "06 апреля 2025",
            sum: "0.000.000",
            Receipt: "",
        },
        {
            id: "1M1",
            modul: "Модуль 2",
            status: "На проверке",
            purchaseDate: "06 апреля 2025",
            sum: "0.000.000",
            Receipt: "",
        },
        {
            id: "1M5",
            modul: "Модуль 1",
            status: "Не оплачено",
            purchaseDate: "06 апреля 2025",
            sum: "0.000.000",
            Receipt: "",
        },
        {
            id: "1M1",
            modul: "Модуль 1",
            status: "В ожидании",
            purchaseDate: "06 апреля 2025",
            sum: "0.000.000",
            Receipt: "",
        },
        {
            id: "1M1",
            modul: "Модуль 1",
            status: "В ожидании",
            purchaseDate: "06 апреля 2025",
            sum: "0.000.000",
            Receipt: "",
        },
    ]

    const [courseInputValue, setCourseInputValue] = useState("");
    const [paymentInputValue, setPaymentInputValue] = useState("");
    useTitle("User Info");


    const filterNestedData = (items, search) => {
        return items
            .map((item) => {
                const lower = search.toLowerCase();

                const match =
                    item.name?.toLowerCase().includes(lower) ||
                    item.status?.toLowerCase().includes(lower) ||
                    item.id?.toString().includes(lower);

                let filteredChildren = [];
                if (item.children) {
                    filteredChildren = filterNestedData(item.children, search);
                }

                if (match || filteredChildren.length > 0) {
                    return {
                        ...item,
                        children: filteredChildren.length > 0 ? filteredChildren : item.children,
                    };
                }

                return null;
            })
            .filter(Boolean);
    };

    const filteredCourses = filterNestedData(data, courseInputValue);

    const filteredPayments = data2.filter((item) => {
        const lower = paymentInputValue.toLowerCase();
        return (
            item.modul?.toLowerCase().includes(lower) ||
            item.id?.toString().includes(lower)
        );
    });



    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Пользователи</h1>
            <div style={{ display: "flex", gap: "30px", marginBottom: "70px" }}>
                <Profil />
                <Profil2 />
            </div>
            <div style={{maxWidth:"1098px"}} className={styles.wrapper}>
                <h3 className="title2">Опросник</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Зачем изучать русский язык?</th>
                            <th>Знание языка</th>
                            <th>Навык для развития</th>
                            <th>Время на занятия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.id}</td>
                            <td><div className={styles.reasonContainer}>
                                {user.reason.map((item, index) => (
                                    <p key={index} className={`${styles.coloredText} ${item === "Смотреть видео" ? styles.ink : item === "Слушать музыку" ? styles.red : item === "Читать книги" ? styles.pumpkin : item === "Писать и понимать" ? styles.black : item === "Изучать новые слова" ? styles.blue : ""}`}>{item}</p>
                                ))}
                            </div></td>
                            <td style={{ minWidth: "250px" }}>{user.knowledge === "Не знаю" ? <InternetBtnZero /> : user.knowledge === "Отлично владею" ? <InternetBtnGood /> : user.knowledge === "Знаю хорошо" ? <InternetBtnNormal /> : user.knowledge === "Понимаю немного" ? <InternetBtnSlow /> : ""}</td>
                            <td style={{ textAlign: "center", minWidth: "263px" }}>
                                <div className={styles.developmentContainer}>
                                    {user.development.map((item, index) => (
                                        <p key={index} className={`${styles.coloredText} ${item === "Грамматика" ? styles.ink : item === "Писать" ? styles.red : item === "Читать" ? styles.brown : item === "Слушать" ? styles.pink : ""}`}>{item}</p>
                                    ))}
                                </div>
                            </td>
                            <td style={{ textAlign: "center", minWidth: "195px" }}>{user.time}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ marginTop: "32px" }}>
                <h3 className="title2">Курсы</h3>
                <div className={styles.wrapper}>
                    <Filter
                        onInputChange={setCourseInputValue}
                        number={filteredCourses.length}
                        filterField={{
                            key: "status",
                            label: "Статус",
                            options: ["В процессе", "Создан", "Остановлен", "Не начат"],
                        }}
                    />
                    <Table
                        itemsPerPage={10}
                        thead={["id", "Курс", "Статус", "Дата создания", "Успеваемость", "Действия"]}
                        data={filteredCourses}
                    /></div>
            </div>
            <div style={{ maxWidth: "1100px", marginTop: "10px", padding: "30px", borderRadius:"20px" }} className={styles.wrapper} >
                <h3 className="title2">Достижения</h3>
                <div className={styles.flex}>
                    {
                        Array.from({ length: 8 }, (_, index) => (
                            <AchievementsCart key={index} />
                        ))
                    }
                </div>
            </div>
            <div style={{marginTop:"46px"}}>
                <Calendar
                    active={[
                        { year: "2025", month: "07", day: [21, 22, 25, 26] },
                        { year: "2025", month: "08", day: [10, 22, 28, 29] },
                    ]}
                    activeDates={["2025-04-25", "2025-04-26", "2025-04-27"]}
                />
            </div>
            <div style={{ marginTop: "46px" }}>
                <h3 className="title2">История платежей</h3>
                <div className={styles.wrapper}>
                    <Filter
                        onInputChange={setPaymentInputValue}
                        number={filteredPayments.length}
                        filterField={{
                            key: "status",
                            label: "Статус",
                            options: ["Оплачен", "На проверке", "Не оплачено", "В ожидании"],
                        }}
                    />
                    <Table
                        itemsPerPage={4}
                        thead={["id", "Модуль", "Статус", "Дата покупки", "Сумма", "Квитанция", "Действия"]}
                        data={filteredPayments}
                    /></div>
            </div>
        </div>
    )
}

export default UserDetail