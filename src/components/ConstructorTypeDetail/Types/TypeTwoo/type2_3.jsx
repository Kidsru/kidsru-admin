import Textarea from '../../Details/Textarea/textarea'
import Index4 from "../../../Detals/LoadMedia/index4/index";
import SaveButton from '../../../Detals/SaveButton/saveButton';
import styles from "../question.module.css";

const Type2_3 = ({characterCount, setCharacterCount}) => {
  return (
    <div>
      <div style={{ marginBottom: "30px" }} className={styles.flex}>
        <div
          style={{ height: "162px" }}
          className={styles.questionCountWrapper}
        >
          <h3 className={styles.questionCountTitle}>
            Сколько вариантов? <span className="redText">*</span>
          </h3>
          <div
            style={{ width: "465px" }}
            className={styles.questionCount}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <button
                onClick={() => setCharacterCount(item)}
                key={item}
                className={characterCount === item ? styles.active : ""}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <Textarea
          width={"505px"}
          mainTitle={"Загрузите озвучку и текст вопроса / действия"}
          subtitle={
            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
          }
          title={"Текст вопроса / действия"}
          value={"Добавить картинку “Добрый вечер”"}
        />
      </div>
      <div
        style={{
          width: "1040px",
        }}
      >
        <Index4
          title={"Загрузите картинки или анимацию"}
          subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
          src={[
            "https://picsum.photos/1024/1024?random=1",
            "https://picsum.photos/1024/1024?random=2",
            "https://picsum.photos/1024/1024?random=3",
            "https://picsum.photos/1024/1024?random=4",
          ]}
          content={[
            {
              wrapper: { width: "1040px" },
              content: { height: "675px" },
              card: { width: "379px" },
              img: { width: "200px" },
            },
          ]}
          options={true}
          checkbox={true}
          defaultCheck={2}
          textarea={true}
          cardTitle={[
            { title: "Картинка без надписи" },
            { title: "Картинка с надписью" },
          ]}
          textareaContent={[
            {
              value: "Добрый день",
            },
            {
              value: "Добрый день",
            },
            {
              value: "Добрый день",
            },
            {
              value: "Добрый день",
            },
          ]}
        />
      </div>
      <div className={styles.saveButton}>
        <SaveButton text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type2_3