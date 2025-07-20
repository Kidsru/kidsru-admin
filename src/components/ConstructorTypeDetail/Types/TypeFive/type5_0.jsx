import Textarea from "../../Details/Textarea/textarea";
import VariantList from "../../Details/VariantList/variantList";
import styles from "../question.module.css";

const Type5_0 = ({ characterCount, setCharacterCount }) => {
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
            <div
                style={{ flexWrap: "wrap", gap: "30px" }}
                className={styles.flex}
            >
                {Array.from({ length: characterCount }).map((_, index) => (
                    <VariantList
                        key={index}
                        typeFive={true}
                        mainTitle={
                            "Напишите текста ответов для левого и правого рядов"
                        }
                        subtitle={
                            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                        }
                        count={characterCount}
                        initialCharacters={Array.from({
                            length: characterCount,
                        }).map(() => 1)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Type5_0