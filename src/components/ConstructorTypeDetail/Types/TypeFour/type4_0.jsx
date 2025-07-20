import AnswerVariants from "../../Details/AnswerVariants/AnswerVariants";
import Textarea from "../../Details/Textarea/textarea";
import styles from "../question.module.css";

const Type4_0 = ({characterCount, setCharacterCount}) => {
    return (
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
                typeFour={true}
                count={characterCount}
                subtitle={"Привет"}
                max={6}
                setCharacterCount={setCharacterCount}
            />
        </div>
    )
}

export default Type4_0