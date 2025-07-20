import SaveButton from '../../../Detals/SaveButton/saveButton'
import Textarea from '../../Details/Textarea/textarea'
import styles from "../question.module.css";

const Type1_1 = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Textarea
          width={"506px"}
          mainTitle={"Напишите текст ответа"}
          subtitle={
            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
          }
          title={"Текст вопроса / действия"}
          value={"Как правильно поздороваться с учителем?"}
        />
        <Textarea
          width={"506px"}
          mainTitle={"Напишите текст вопроса / действия"}
          subtitle={
            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
          }
          title={"Текст ответа"}
          value={"Здравствуйте"}
        />
      </div>
      <div className={styles.saveButton}>
        <SaveButton text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type1_1