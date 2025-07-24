import { useState } from 'react';
import SaveButton from '../../../Detals/SaveButton/saveButton'
import Textarea from '../../Details/Textarea/textarea'
import styles from "../question.module.css";

const Type1_1 = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleButtonClick = () => {
    if (question && answer) {
      console.log("Question:", question);
      console.log("Answer:", answer);
    } else {
      alert("Вы не нажали кнопку «Готово».")
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Textarea
          mainTitle={"Напишите текст вопроса / действия"}
          setValue={setQuestion}
          width={"506px"}
          subtitle={
            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
          }
          title={"Текст вопроса / действия"}
          value={"Как правильно поздороваться с учителем?"}
        />
        <Textarea
          setValue={setAnswer}
          width={"506px"}
          mainTitle={"Напишите текст ответа"}
          subtitle={
            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
          }
          title={"Текст ответа"}
          value={"Здравствуйте"}
        />
      </div>
      <div className={styles.saveButton}>
        <SaveButton onClick={handleButtonClick} text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type1_1