import Textarea from '../../Details/Textarea/textarea'
import Index3 from "../../../Detals/LoadMedia/index3/index";
import CorrectAnsweTextarea from '../../Details/CorrectAnswerTextArea/CorrectAnsweTextarea.module';
import SaveButton from '../../../Detals/SaveButton/saveButton';
import styles from "../question.module.css";

const Type2_0 = ({characterCount, setCharacterCount, question, number}) => {
    return (
        <div>
            <Textarea
                width={"1040px"}
                mainTitle={"Загрузите озвучку и текст вопроса / действия"}
                subtitle={
                    "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                }
                title={"Текст вопроса / действия"}
                value={"Выберите правильный ответ"}
            />
            <div className={styles.flex}>
                <div
                    style={{
                        width: "400px",
                        height: "774px",
                    }}
                >
                    <Index3
                        title={"Загрузите картинку или анимацию"}
                        subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
                        src={""}
                        width={"400px"}
                        imgWidth={"352px"}
                        imgheight={"352px"}
                        gap={"43px"}
                        textarea={false}
                    />
                </div>
                <div>
                    <div
                        style={{ height: "134px" }}
                        className={styles.questionCountWrapper}
                    >
                        <h3 className={styles.questionCountTitle}>
                            Сколько вариантов? <span className="redText">*</span>
                        </h3>
                        <div
                            style={{ width: "573px" }}
                            className={styles.questionCount}
                        >
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <button
                                    onClick={() => setCharacterCount(item)}
                                    key={item}
                                    className={
                                        characterCount === item ? styles.active : ""
                                    }
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <CorrectAnsweTextarea
                        key={`q${question}_n${number}`}
                        count={characterCount}
                        setCount={setCharacterCount}
                    />
                </div>
            </div>
            <div className={styles.saveButton}>
                <SaveButton text={"Сохранить"} hideIcon={true} />
            </div>
        </div>
    )
}

export default Type2_0