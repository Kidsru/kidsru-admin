import { useState } from "react";
import styles from "./question.module.css";
import { ReactComponent as Arrow } from "../../../../assets/icon/buttonArrow2.svg";
import SaveButton from "../../../Detals/SaveButton/saveButton";
import Textarea from "../Textarea/textarea";

const Question = ({ question, type }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.title}>
                    {
                        type !== "1.2" && `Вопрос №${question + 1}`
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
                                <div className="saveButton">
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
                                <div className="saveButton">
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
