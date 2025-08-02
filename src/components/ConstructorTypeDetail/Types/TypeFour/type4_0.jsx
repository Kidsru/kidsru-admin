import { useState } from "react";
import AnswerVariants from "../../Details/AnswerVariants/AnswerVariants";
import Textarea from "../../Details/Textarea/textarea";
import styles from "../question.module.css";
import SaveButton from "../../../Detals/SaveButton/saveButton";

const Type4_0 = ({ characterCount, setCharacterCount }) => {
    const [question, setQuestion] = useState("");
    const [variants, setVariants] = useState("");

    const handleButtonClick = () => {
        if (question && variants) {
            console.log("Question:", question);
            console.log("variants:", variants);
        } else {
            alert("Вы не нажали кнопку «Готово».")
        }
    }
    return (
        <div>
            <div>
                <div className={styles.flex}>
                    <div
                        style={{ height: "162px" }}
                        className={styles.questionCountWrapper}
                    >
                        <h3 className={styles.questionCountTitle}>
                            Сколько вариантов? <span className="redText">*</span>
                        </h3>
                        <div
                            style={{ width: "464px" }}
                            className={styles.questionCount}
                        >
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <button
                                    onClick={() => {
                                        setCharacterCount(item);
                                    }}
                                    key={item}
                                    className={characterCount === item ? styles.active : ""}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <Textarea
                        setValue={setQuestion}
                        width={"504px"}
                        height={"83px"}
                        mainTitle={"Загрузите озвучку и текст вопроса / действия"}
                        subtitle={
                            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                        }
                        title={"Текст вопроса / действия"}
                        value={"Перетащите цвета на картинки"}
                    />
                </div>
                <AnswerVariants
                    setValue={setVariants}
                    typeFour={true}
                    count={characterCount}
                    subtitle={"Привет"}
                    max={6}
                    setCharacterCount={setCharacterCount}
                />
            </div>
            <div className={styles.saveButton}>
                <SaveButton onClick={handleButtonClick} text={"Сохранить"} hideIcon={true} />
            </div>
        </div>
    )
}

export default Type4_0