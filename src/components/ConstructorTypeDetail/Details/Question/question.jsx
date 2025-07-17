import { useState } from "react";
import styles from "./question.module.css";
import { ReactComponent as Arrow } from "../../../../assets/icon/buttonArrow2.svg";
import SaveButton from "../../../Detals/SaveButton/saveButton";
import Textarea from "../Textarea/textarea";
import AnswerVariants from "../AnswerVariants/AnswerVariants";

const Question = ({ question, number, type, isMainBlock }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isMainBlock);


    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.title}>
                    {
                        type !== "1.2" && (
                            isMainBlock ? "Основной блок" : `Вопрос №${question + 1}`
                        )
                    }
                    {
                        type === "1.2" && `Слова 1-${number}`
                    }
                </h2>
                <button onClick={toggleAccordion}
                    className={isOpen ? styles.rotate : ""}
                >
                    <Arrow />
                </button>
            </div>

            {isOpen && (
                <div className={styles.content}>
                    {
                        type === "1.0" && (
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ width: "462px", height: "622px" }}>TLC</div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                                        <Textarea mainTitle={"Напишите текст ответа * "} subtitle={"Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."} title={"Текст вопроса / действия"} value={"Как правильно поздороваться с учителем?"} />
                                        <Textarea mainTitle={"Напишите текст вопроса / действия *"} subtitle={"Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."} title={"Текст ответа"} value={"Здравствуйте"} />
                                    </div>
                                </div>
                                <div className={styles.saveButton}>
                                    <SaveButton text={"Сохранить"} hideIcon={true} />
                                </div>
                            </div>
                        )
                    }
                    {
                        type === "1.1" && (
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Textarea width={"506px"} mainTitle={"Напишите текст ответа * "} subtitle={"Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."} title={"Текст вопроса / действия"} value={"Как правильно поздороваться с учителем?"} />
                                    <Textarea width={"506px"} mainTitle={"Напишите текст вопроса / действия *"} subtitle={"Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."} title={"Текст ответа"} value={"Здравствуйте"} />
                                </div>
                                <div className={styles.saveButton}>
                                    <SaveButton text={"Сохранить"} hideIcon={true} />
                                </div>
                            </div>
                        )
                    }
                    {
                        type === "1.2" && (
                            <div>
                                <div>
                                    <Textarea width={"1040px"} mainTitle={"Загрузите озвучку и текст вопроса / действия *"} subtitle={"Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."} title={"Текст вопроса / действия"} value={"Повторите слово или фразу в микрофон"} />
                                    <AnswerVariants count={number} />
                                </div>
                                <div className={styles.saveButton}>
                                    <SaveButton text={"Сохранить"} hideIcon={true} />
                                </div>
                            </div>
                        )
                    }
                    {
                        type === "1.3" && (
                            <div>
                                <div>
                                    {
                                        isMainBlock ? (
                                            <div style={{ width: "645px", height: "664px" }}>TLC</div>
                                        ) : (
                                            <div>nhjh</div>
                                        )
                                    }
                                </div>
                                <div className={styles.saveButton}>
                                    <SaveButton text={"Сохранить"} hideIcon={true} />
                                </div>
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    );
};

export default Question;
