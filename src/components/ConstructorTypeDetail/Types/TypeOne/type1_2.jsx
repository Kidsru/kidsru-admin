import Textarea from '../../Details/Textarea/textarea'
import AnswerVariants from '../../Details/AnswerVariants/AnswerVariants'
import SaveButton from '../../../Detals/SaveButton/saveButton'
import styles from "../question.module.css";
import { useState } from 'react';
import axios from 'axios';

const Type1_2 = ({ number }) => {
  const [question, setQuestion] = useState("");
  const [answerVariants, setAnswerVariants] = useState([])

  const token = localStorage.getItem("token");
  const gameId = localStorage.getItem("gameId");

  const handleButtonClick = async () => {
    if (answerVariants.length && question) {
      const result = {
        game_id: gameId,
        text: question,
        variants_count: answerVariants.length,
        characters_count: 0,
        variants: answerVariants.map((answer, index) => ({
          text: answer.text,
          image: "",
          is_correct: index === 0, 
          character_number: 0,
          order: index,
          audio: "",
        })),
        images: [
          {
            text: "",
            color: "",
            image: "",
          },
        ],
      };
      console.log(result);
      
      try {
        const response = await axios.post(
          "https://api.kidsru.uz/v1/question/create",
          result,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(" Muvaffaqiyatli yuborildi:", response.data);
      } catch (error) {
        console.error(" Xatolik yuz berdi:", error.response?.data || error.message);
      }

    } else {
      alert("Вы не нажали кнопку «Готово».")
    }
  }

  return (
    <div>
      <div>
        <Textarea
          setValue={setQuestion}
          width={"1040px"}
          mainTitle={"Загрузите озвучку и текст вопроса / действия"}
          subtitle={
            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
          }
          title={"Текст вопроса / действия"}
          value={"Повторите слово или фразу в микрофон"}
        />
        <AnswerVariants setValue={setAnswerVariants} count={number} />
      </div>
      <div className={styles.saveButton}>
        <SaveButton onClick={handleButtonClick} text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type1_2