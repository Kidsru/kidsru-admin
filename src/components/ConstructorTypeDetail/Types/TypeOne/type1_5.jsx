import Index3 from "../../../Detals/LoadMedia/index3/index";
import SaveButton from "../../../Detals/SaveButton/saveButton";
import VariantList from "../../Details/VariantList/variantList";
import styles from "../question.module.css";

const Type1_5 = ({characterCount, setCharacterCount}) => {
  return (
    <div>
      <div className={styles.questionCount}>
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

      <div
        style={{
          width: "1040px",
          height: "715px",
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-around",
          gap: "30px",
        }}
      >
        <Index3
          title={"Загрузите озвучку и текст вопроса / действия"}
          subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
          src={""}
          width={"326px"}
          imgWidth={"278px"}
          imgheight={"278px"}
          gap={"21.08px"}
          textarea={true}
          textareaTitle={"Текст вопроса / действия"}
          textareaPlaceholder={""}
          textareaValue={"Ответьте на реплику ①"}
        />
        <Index3
          title={"Загрузите озвучку и текст вопроса / действия"}
          subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
          src={""}
          width={"326px"}
          imgWidth={"278px"}
          imgheight={"278px"}
          gap={"21.08px"}
          textarea={true}
          textareaTitle={"Текст вопроса / действия"}
          textareaPlaceholder={""}
          textareaValue={"Ответьте на реплики ① и ②"}
        />
        <Index3
          title={"Загрузите озвучку и текст вопроса / действия"}
          subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
          src={""}
          width={"326px"}
          imgWidth={"278px"}
          imgheight={"278px"}
          gap={"21.08px"}
          textarea={true}
          textareaTitle={"Текст вопроса / действия"}
          textareaPlaceholder={""}
          textareaValue={"Ответьте на реплики ① и ②"}
        />
      </div>

      <div className={styles.flex}>
        <VariantList
          count={characterCount}
          initialCharacters={Array(characterCount).fill(1)}
        />
        <VariantList
          count={characterCount}
          initialCharacters={Array(characterCount).fill(2)}
        />
      </div>

      <div className={styles.saveButton}>
        <SaveButton text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type1_5