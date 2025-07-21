import Index1 from "../../../Detals/LoadMedia/index1/index";
import Index3 from "../../../Detals/LoadMedia/index3/index";
import SaveButton from "../../../Detals/SaveButton/saveButton";
import Textarea from "../../Details/Textarea/textarea";
import styles from "../question.module.css";

const Type1_3 = ({ isMainBlock }) => {
  return (
    <div>
      <div>
        {isMainBlock ? (
          <div style={{ width: "645px", height: "664px" }}>
            <Index1
              title={"Загрузите картинку или анимацию"}
              subtitle={
                "Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ."
              }
              size={{ wrapper: "645px", image: "461px", gap: "22" }}
            />
          </div>
        ) : (
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ width: "400px", height: "657px" }}>
              <Index3
                title={"Загрузите картинку или анимацию"}
                subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
                src={""}
                width={"400px"}
                imgWidth={"352px"}
                imgheight={"352px"}
                gap={"22px"}
                textarea={false}
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
                width={"613px"}
                mainTitle={"Напишите текст вопроса / действия"}
                subtitle={
                  "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                }
                title={"Текст вопроса / действия"}
                value={"Какого цвета роза?"}
              />
              <Textarea
                width={"613px"}
                mainTitle={"Напишите текст ответа"}
                subtitle={
                  "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                }
                title={"Текст ответа"}
                value={"Розовая"}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.saveButton}>
        <SaveButton text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type1_3