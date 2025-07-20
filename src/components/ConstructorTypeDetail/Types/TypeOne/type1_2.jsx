import Textarea from '../../Details/Textarea/textarea'
import AnswerVariants from '../../Details/AnswerVariants/AnswerVariants'
import SaveButton from '../../../Detals/SaveButton/saveButton'
import styles from "../question.module.css";

const Type1_2 = ({number}) => {
  return (
    <div>
      <div>
        <Textarea
          width={"1040px"}
          mainTitle={"Загрузите озвучку и текст вопроса / действия"}
          subtitle={
            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
          }
          title={"Текст вопроса / действия"}
          value={"Повторите слово или фразу в микрофон"}
        />
        <AnswerVariants count={number} />
      </div>
      <div className={styles.saveButton}>
        <SaveButton text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type1_2