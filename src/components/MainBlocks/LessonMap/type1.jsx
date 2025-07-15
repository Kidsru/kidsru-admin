import { useState, useEffect } from "react";
import styles from "./lessonMap.module.css";
import bg from "../../../assets/img/tooltip-container (1).png";
import { FaAngleRight } from "react-icons/fa6";

const Type1 = () => {
    const [module, setModule] = useState(1);
    const [block, setBlock] = useState(1);
    const [lessonFrom, setLessonFrom] = useState(1);
    const [lessonTo, setLessonTo] = useState(3);
    const [blockName, setBlockName] = useState("");
    const [lessonTexts, setLessonTexts] = useState([]);
    const [lessonPlaceholders, setLessonPlaceholders] = useState([]);

    //  Backenddan ma'lumot olish
    const fetchBackendData = async () => {
        // Bu joyda backend so‘rovi bo‘ladi (hozircha fake ma'lumot)
        const backendData = {
            blockName: `Знакомство`,
            lessons: Array.from({ length: lessonTo - lessonFrom + 1 }, (_, i) => {
                const n = lessonFrom + i;
                return `Урок ${n}.\n«Контент для урока ${n}»`;
            }),
        };

        // Ma’lumotlarni state ga joylash
        setBlockName(backendData.blockName);
        setLessonPlaceholders(backendData.lessons);
        setLessonTexts(Array(backendData.lessons.length).fill(""));
    };

    //  modul, block, lessonFrom, lessonTo o‘zgarganda backenddan yangidan ma’lumot olish
    useEffect(() => {
        fetchBackendData();
    }, [module, block, lessonFrom, lessonTo]);

    const handleLessonTextChange = (index, value) => {
        const updated = [...lessonTexts];
        updated[index] = value;
        setLessonTexts(updated);
    };

    const handleSubmit = () => {
        const lessonsData = lessonTexts.map((text, i) =>
            text ? text : lessonPlaceholders[i]
        );

        const data = {
            module,
            block,
            lessonFrom,
            lessonTo,
            blockName,
            lessons: lessonsData,
        };

        console.log("Jo‘natilayotgan ma’lumot:", data);
    };

    return (
        <div>
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
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
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
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className={styles.SelectorLast}>
                        <div>
                            <label htmlFor={styles.lessonFromSelect}>УРОК с:</label>
                            <select
                                id={styles.lessonFromSelect}
                                value={lessonFrom}
                                onChange={(e) => setLessonFrom(Number(e.target.value))}
                                style={{ backgroundImage: `url(${bg})` }}
                            >
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <option key={n} value={n}>
                                        {n}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor={styles.lessonToSelect}>УРОК до:</label>
                            <select
                                id={styles.lessonToSelect}
                                value={lessonTo}
                                onChange={(e) => setLessonTo(Number(e.target.value))}
                                style={{ backgroundImage: `url(${bg})` }}
                            >
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <option key={n} value={n}>
                                        {n}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.LessonMapForm2}>
                <h2>
                    Тип 1. Первый блок (Блок {block}; Уроки {lessonFrom}–{lessonTo};
                    кнопка “Перейти”)
                </h2>
                <div className={styles.wrpTextArea}>
                    <div className={styles.lessonTextArea}>
                        <h3>
                            Название Блока <span>*</span>
                        </h3>
                        <textarea
                            placeholder="Введите название блока"
                            value={blockName}
                            onChange={(e) => setBlockName(e.target.value)}
                        ></textarea>
                    </div>

                    {lessonPlaceholders.map((placeholder, index) => (
                        <div className={styles.lessonTextArea} key={index}>
                            <h3>
                                Урок #{lessonFrom + index} <span>*</span>
                            </h3>
                            <textarea
                                placeholder={placeholder}
                                value={lessonTexts[index]}
                                onChange={(e) =>
                                    handleLessonTextChange(index, e.target.value)
                                }
                            ></textarea>
                        </div>
                    ))}
                </div>
                <div className={styles.wrpBtn}>
                    <button onClick={handleSubmit}>
                        Сохранить <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Type1;
