import { useLocation } from "react-router-dom";
import TranslationsHistory from "../../Detals/TranslationsHistory/TranslationsHistory";
import bg from "../../../assets/img/tooltip-container (1).png";
import styles from "./dictionary.module.css";
import { useEffect, useState } from "react";
import Filter from "../../Filter/filter";
import Table from "../../Table/table";

const data = [
    {
        id: "M1B1L1W1",
        russian: "Здравствуйте",
        uzbek: "Assalomu aleykum",
        approved: true,
        createdAt: "06 апреля 2025"
    },
    {
        id: "M1B1L1W2",
        russian: "Привет",
        uzbek: "Salom",
        approved: true,
        createdAt: "06 апреля 2025"
    },
    {
        id: "M1B1L1W3",
        russian: "Привет",
        uzbek: "Salom",
        approved: true,
        createdAt: "06 апреля 2025"
    },
    {
        id: "M1B1L1W4",
        russian: "Привет",
        uzbek: "Salom",
        approved: true,
        createdAt: "06 апреля 2025"
    },
    {
        id: "M1B1L1W5",
        russian: "Привет",
        uzbek: "Salom",
        approved: true,
        createdAt: "06 апреля 2025"
    },
    {
        id: "M1B1L1W6",
        russian: "Привет",
        uzbek: "Salom",
        approved: false,
        createdAt: "06 апреля 2025"
    },
    {
        id: "M1B1L1W7",
        russian: "Привет",
        uzbek: "Salom",
        approved: false,
        createdAt: "06 апреля 2025"
    },
    {
        id: "M1B1L1W8",
        russian: "Привет",
        uzbek: "Salom",
        approved: false,
        createdAt: "06 апреля 2025"
    },
    {
        id: "M1B1L1W9",
        russian: "Привет",
        uzbek: "Salom",
        approved: false,
        createdAt: "06 апреля 2025"
    },
    {
        id: "M1B1L1W10",
        russian: "Привет",
        uzbek: "Salom",
        approved: false,
        createdAt: "06 апреля 2025"
    }
];


const AddWordsPage = () => {
    const location = useLocation();
    const { breadcrumb = "" } = location.state || {};

    const [module, setModule] = useState(1);
    const [block, setBlock] = useState(1);
    const [lesson, setLesson] = useState(1);

    // Breadcrumbni analiz qilib select qiymatlarini aniqlash
    useEffect(() => {
        const parts = breadcrumb.split(" / ");

        parts.forEach((part) => {
            if (part.includes("Модуль")) {
                const match = part.match(/Модуль\s+(\d+)/);
                if (match) setModule(Number(match[1]));
            } else if (part.includes("Блок")) {
                const match = part.match(/Блок\s+(\d+)/);
                if (match) setBlock(Number(match[1]));
            } else if (part.includes("Урок")) {
                const match = part.match(/Урок\s+(\d+)/);
                if (match) setLesson(Number(match[1]));
            }
        });
    }, [breadcrumb]);

    const handleDelete = (id) => {
        console.log(`Delete word with id: ${id}`);
    }

    const handleEdit = (id) => {
        console.log(`Edit word with id: ${id}`);
    }

    return (
        <div>
            <h4 className="title2">Словарь</h4>
            <div className={styles.LessonMapForm}>
                <h3>Заполните поля ниже</h3>
                <div className={styles.Selects}>
                    <div>
                        <label htmlFor={styles.moduleSelect}>МОДУЛЬ:</label>
                        <select
                            id={styles.moduleSelect}
                            value={module}
                            onChange={(e) => setModule(Number(e.target.value))}
                            style={{ backgroundImage: `url(${bg})` }}
                        >
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>

                    </div>
                    <div>
                        <label htmlFor={styles.blockSelect}>БЛОК:</label>
                        <select
                            id={styles.blockSelect}
                            value={block}
                            onChange={(e) => setBlock(Number(e.target.value))}
                            style={{ backgroundImage: `url(${bg})` }}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>

                    </div>
                    <div className={styles.SelectorLast}>
                        <div>
                            <label htmlFor={styles.lessonSelect}>УРОК:</label>
                            <select
                                id={styles.lessonSelect}
                                value={lesson}
                                onChange={(e) => setLesson(Number(e.target.value))}
                                style={{ backgroundImage: `url(${bg})` }}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>

                        </div>
                    </div>
                </div>
            </div>
            <TranslationsHistory />
            <div style={{ marginTop: "45px" }}>
                <h3 className="title2">{`Модуль ${module} / Блок ${block} / Урок ${lesson}`}</h3>
                <div className="wrapper">
                    <Filter />
                    <Table itemsPerPage={10} thead={["id", "На русском", "На узбекском", "Утвердить", "Дата создания", "Действия"]} data={data} hideView={true} onDelete={handleDelete} onEdit={handleEdit} />
                </div>
            </div>
        </div>
    );
};

export default AddWordsPage;
