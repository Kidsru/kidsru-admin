import Textarea from '../../Details/Textarea/textarea'
import Index4 from "../../../Detals/LoadMedia/index4/index";
import CorrectAnsweTextarea from '../../Details/CorrectAnswerTextArea/CorrectAnsweTextarea.module';
import SaveButton from '../../../Detals/SaveButton/saveButton';
import styles from "../question.module.css";

const Type2_1 = ({characterCount, setCharacterCount, question, number}) => {
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
        <div>
          <div
            style={{ height: "162px" }}
            className={styles.questionCountWrapper}
          >
            <h3 className={styles.questionCountTitle}>
              Сколько вариантов? <span className="redText">*</span>
            </h3>
            <div
              style={{ width: "428px" }}
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
          <div
            style={{
              width: "468px",
              height: "638px",
            }}
          >
            <Index4
              title={"Загрузите картинки или анимацию"}
              subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
              src={[
                "https://picsum.photos/1024/1024?random=1",
                "https://picsum.photos/1024/1024?random=2",
              ]}
              content={[
                {
                  wrapper: { width: "468px" },
                  content: { height: "339px" },
                  card: { width: "174px" },
                  img: { width: "150px" },
                },
              ]}
              options={false}
              checkbox={false}
              textarea={false}
              cardTitle={[{ title: "Силуэт" }, { title: "Картинка" }]}
            />
          </div>
        </div>
        <CorrectAnsweTextarea
          contentHeight={"619px"}
          width={"545px"}
          height={"828px"}
          key={`q${question}_n${number}`}
          count={characterCount}
          setCount={setCharacterCount}
        />
      </div>
      <div className={styles.saveButton}>
        <SaveButton text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type2_1