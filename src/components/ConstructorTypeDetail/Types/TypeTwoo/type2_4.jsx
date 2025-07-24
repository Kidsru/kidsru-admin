import { useState } from "react";
import Index3 from "../../../Detals/LoadMedia/index3/index";
import SaveButton from "../../../Detals/SaveButton/saveButton";
import VariantList from "../../Details/VariantList/variantList";
import VariantList2 from "../../Details/VariantList2/variantList2";
import styles from "../question.module.css";

const Type2_4 = ({ characterCount, setCharacterCount }) => {
  const [questions, setQuestions] = useState()
  const [variants1, setVariants1] = useState()
  const [variants2, setVariants2] = useState()

  const handleButtonClick = () => {
    if (questions && variants1 && variants2) {
      console.log("Question:", questions);
      console.log("variant1:", variants1);
      console.log("variant2:", variants2);
    } else {
      alert("Вы не нажали кнопку «Готово».")
    }
  }

  return (
    <div>
      <div
        style={{ height: "162px" }}
        className={styles.questionCountWrapper}
      >
        <h3 className={styles.questionCountTitle}>
          Сколько реплик у каждого персонажа?{" "}
          <span className="redText">*</span>
        </h3>
        <div
          style={{ width: "1001px" }}
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
      <div
        style={{
          width: "100%",
          height: "max-content",
          display: "flex",
          marginBottom: "30px",
          justifyContent: "space-around",
          gap: "30px",
        }}
      >
        <Index3
          title={"Загрузите озвучку и текст вопроса / действия"}
          subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
          src={""}
          width={"327px"}
          imgWidth={"279px"}
          imgheight={"279px"}
          gap={"46px"}
          textarea={true}
          textareaTitle={"Текст вопроса / действия"}
          textareaPlaceholder={""}
          textareaValue={"Ответьте на реплики ① и ②"}
        />
        <Index3
          title={"Загрузите озвучку и текст вопроса / действия"}
          subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
          src={""}
          width={"327px"}
          imgWidth={"279px"}
          imgheight={"279px"}
          gap={"46px"}
          textarea={true}
          textareaTitle={"Текст вопроса / действия"}
          textareaPlaceholder={""}
          textareaValue={"Ответьте на реплику ①"}
        />
        <Index3
          title={"Загрузите озвучку и текст вопроса / действия"}
          subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
          src={""}
          width={"327px"}
          imgWidth={"279px"}
          imgheight={"279px"}
          gap={"46px"}
          textarea={true}
          textareaTitle={"Текст вопроса / действия"}
          textareaPlaceholder={""}
          textareaValue={"Ответьте на реплику ①"}
        />
      </div>
      <VariantList
        setValue={setQuestions}
        height={""}
        textareaTitle={"Текст реплик"}
        width={"1041px"}
        contentWidth={"993px"}
        count={2}
        initialCharacters={Array(characterCount).fill(1)}
      />
      <div className={styles.flex}>
        <VariantList2
          setValue={setVariants1}
          mainTitle={
            "Напишите текста вариантов ответов 1 реплики для персонажа ② и выберите правильный ответ"
          }
          textareaTitle={"Текст реплик"}
          width={"508px"}
          contentWidth={"460px"}
          count={characterCount}
          initialCharacters={Array(characterCount).fill(2)}
        />
        <VariantList2
        setValue={setVariants2}
          mainTitle={
            "Напишите текста вариантов ответов 2 реплики для персонажа ② и выберите правильный ответ *"
          }
          textareaTitle={"Текст реплик"}
          width={"508px"}
          contentWidth={"460px"}
          count={characterCount}
          initialCharacters={Array(characterCount).fill(2)}
        />
      </div>
      <div className={styles.saveButton}>
        <SaveButton onClick={handleButtonClick} text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type2_4