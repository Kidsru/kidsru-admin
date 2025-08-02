import SaveButton from "../../../Detals/SaveButton/saveButton";
import Textarea from "../../Details/Textarea/textarea";
import Index4 from "../../../Detals/LoadMedia/index4/index";
import styles from "../question.module.css";
import { useState } from "react";
import axios from "axios";

const Type1_0 = () => {
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
      console.error("Xatolik yuz berdi:", error.response?.data || error.message);
    }
  } else {
    alert("Вы не нажали кнопку «Готово».");
  }
};



  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "462px", height: "622px" }}>
          <Index4
            title={"Загрузите картинки или анимацию"}
            subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
            src={[
              "https://picsum.photos/1024/1024?random=1",
              "https://picsum.photos/1024/1024?random=2",
            ]}
            content={[
              {
                wrapper: { width: "462px" },
                content: { height: "323px" },
                card: { width: "174px" },
                img: { width: "150px" },
              },
            ]}
            checkbox={false}
            textarea={false}
            cardTitle={[
              { title: "Картинка без надписи" },
              { title: "Картинка с надписью" },
            ]}
            textareaContent={[
              {
                title: "Title 1",
                placeholder: "Placeholder 1",
                value: "Value 1",
              },
              {
                title: "Title 2",
                placeholder: "Placeholder 2",
                value: "Value 2",
              },
            ]}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Textarea
            setValue={setQuestion}
            mainTitle={"Напишите текст вопроса / действия"}
            subtitle={
              "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
            }
            title={"Текст вопроса / действия"}
            value={"Как правильно поздороваться с учителем?"}
          />
          <Textarea
            setValue={setAnswer}
            mainTitle={"Напишите текст ответа"}
            subtitle={
              "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
            }
            title={"Текст ответа"}
            value={"Здравствуйте"}
          />
        </div>
      </div>
      <div className={styles.saveButton}>
        <SaveButton onClick={handleButtonClick} text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type1_0