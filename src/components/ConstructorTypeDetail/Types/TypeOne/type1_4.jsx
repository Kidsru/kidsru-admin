import { useState } from "react";
import Index3 from "../../../Detals/LoadMedia/index3/index";
import Index4 from "../../../Detals/LoadMedia/index4/index";
import SaveButton from "../../../Detals/SaveButton/saveButton";
import Textarea from '../../Details/Textarea/textarea'
import styles from "../question.module.css";

const Type1_4 = () => {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");

    const handleButtonClick = () => {
    if (question1 && question2) {
      console.log("Question:", question1);
      console.log("question2:", question2);
    }else {
      alert("Вы не нажали кнопку «Готово».")
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Textarea
          setValue={setQuestion1}
          width={"505px"}
          mainTitle={"Задайте первый вопрос"}
          subtitle={
            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
          }
          title={"Текст ответа"}
          value={"Какого цвета корпус футболки?"}
        />
        <Textarea
          setValue={setQuestion2}
          width={"505px"}
          mainTitle={"Задайте второй вопрос"}
          subtitle={
            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
          }
          title={"Текст ответа"}
          value={"Какого цвета рукава футболки?"}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "384px",
            height: "772px",
            marginTop: "27px",
          }}
        >
          <Index3
            title={"Загрузите картинку или анимацию"}
            subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
            src={""}
            width={"384px"}
            imgWidth={"336px"}
            imgheight={"336px"}
            gap={"59px"}
            textarea={false}
          />
        </div>
        <div
          style={{
            width: "626px",
            height: "772px",
            marginTop: "27px",
          }}
        >
          <Index4
            title={"Загрузите картинку или анимацию с описанием"}
            subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
            src={[
              "https://picsum.photos/1024/1024?random=1",
              "https://picsum.photos/1024/1024?random=2",
            ]}
            content={[
              {
                wrapper: { width: "626px" },
                content: { height: "473px" },
                card: { width: "256px" },
                img: { width: "200px" },
              },
            ]}
            options={true}
            checkbox={false}
            textarea={true}
            textareaContent={[
              {
                value: "Желтый",
              },
              {
                value: "Зеленый",
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.saveButton}>
        <SaveButton onClick={handleButtonClick} text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type1_4