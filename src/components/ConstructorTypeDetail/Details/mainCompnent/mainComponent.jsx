import { useState, useEffect } from "react";
import bg from "../../../../assets/img/tooltip-container (1).png";
import LoadMedia_2 from "../../../Detals/LoadMedia/index2/index"
import styles from "./mainComponent.module.css";

const MainComponent = ({ types }) => {
    const [selectedType, setSelectedType] = useState("");
    const [selectedTypeName, setSelectedTypeName] = useState("");
    const [module, setModule] = useState(1);
    const [block, setBlock] = useState(1);

    useEffect(() => {
        if (types?.length > 0) {
            setSelectedType(types[0].type);
            setSelectedTypeName(types[0].name);
        }
    }, [types]);


    return (
        <div>
            <div className={styles.wrapper}>
                <h4 className={styles.title}>Типы карты уроков</h4>
                <div className={styles.types}>
                    {
                        types?.map((type, index) => (
                            <div className={styles.type} key={index}>
                                <input
                                    type="radio"
                                    name="type"
                                    checked={selectedType === type.type}
                                    onChange={() => {
                                        setSelectedType(type.type)
                                        setSelectedTypeName(type.name)
                                    }}
                                />
                                <p>{type.name}</p>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className={`${styles.LessonMapForm} ${styles.wrapper}`}>
                <h3 className="title2">Заполните поля ниже</h3>
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
                    <div>
                        <label htmlFor={styles.blockSelect}>УРОК:</label>
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
                    <div>
                        <label htmlFor={styles.blockSelect}>ИГРА:</label>
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
                </div>
            </div>
            <div className={styles.wrapper}>
                <h3 className="title2">{selectedTypeName}</h3>
                <div className={styles.flex}>
                    <div>
                        <div className={styles.textareaWrapper}>
                            <h4 className={styles.subtitle}>Название игры по сценарию</h4>
                            <textarea className={styles.nameTextarea} defaultValue={`«Повторяй за мной» («Men bilan takrorlang»)`}></textarea>
                        </div>
                        <div className={styles.textareaWrapper}>
                            <h4 className={styles.subtitle}>Название игры по сценарию</h4>
                            <textarea className={styles.problemTextarea} defaultValue={`Механика:
На экране появляются 6 картинок, каждая символизирует одно из приветствий:

«Здравствуйте» (например, иконка с двумя пожимаями руками)
«Привет» (кто-то машет рукой)
«Доброе утро» (солнышко)
«Добрый день» (яркое дневное солнце)
«Добрый вечер» (закат)
«Доброй ночи» (луна и звёзды)
Когда ребёнок нажимает на картинку или текст, звучит аудио с правильным произношением слова по-русски (например, «Здравствуйте!»).

Внизу экрана есть кнопка-микрофон. Ребёнок нажимает и повторяет услышанное слово.

Система распознаёт произношение. Если произношение достаточно чёткое – звучит позитивный “правильный” звук (голос одобрения, как в Duolingo). Если ребёнок ошибся – звучит другой, мягкий “ошибочный” звук, и Персонаж говорит:

«Qayta urinib ko‘ring!» (Попробуй ещё раз!)

За каждое правильно произнесённое приветствие ребёнок получает звезду                Итог:
Когда все 6 приветствий произнесены, на экране появляется:

«Ajoyib! Siz ruscha salomlashish so‘zlarini aniq aytdingiz!»

Персонаж показывает анимацию «Молодец!» и дарит несколько звёзд.
Затем всплывает кнопка «Дальше» (Keyingi o‘yin) для перехода к следующему этапу.

`}></textarea>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex} style={{ width: "489px", height: "652px", marginTop: "50px" }}>
                            <LoadMedia_2 />
                        </div>
                        <div className={styles.textareaWrapper}>
                            <h4 className={styles.subtitle}>Реплика из видео</h4>
                            <textarea className={styles.videoTextarea} defaultValue={`«Birinchi o‘yinimizda biz rus tilidagi salomlashish so‘zlarini o‘rganamiz. Ekrandagi rasmlarga e’tibor bering. Ular ustiga bosing, so‘zlarni rus tilida eshiting va men bilan birga mikrofonni bosib takrorlang. Agar to‘g‘ri aytsangiz – men sizga sovg‘a beraman!»`}></textarea>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <h3 className={styles.subtitle}>Количество вопросов</h3>
                    <div className={styles.questionCount}>
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <button>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent