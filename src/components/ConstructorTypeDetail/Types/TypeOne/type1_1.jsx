import { useState } from "react";
import SaveButton from "../../../Detals/SaveButton/saveButton";
import Textarea from "../../Details/Textarea/textarea";
import styles from "../question.module.css";
import axios from "axios";

const Type1_1 = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const token = localStorage.getItem("token");
  const gameId = localStorage.getItem("gameId");

  const handleButtonClick = async () => {
    if (question && answer) {
      const result = {
        game_id: gameId,
        text: question,
        variants_count: 1,
        characters_count: 0,
        variants: [
          {
            text: answer,
            is_correct: true,
            image: "",
            character_number: 0,
            order: 0,
            audio: "",
          },
        ],
        images: [
          {
            text: "",
            color: "",
            image: "",
          },
        ],
      };

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
      alert("Вы не нажали кнопку «Готово».");
    }
  };

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
          value={"Повторите слово или фразу в микрофон"}
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
  );
};

export default Type1_1;
