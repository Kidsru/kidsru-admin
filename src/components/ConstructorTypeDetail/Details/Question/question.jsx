import { useState } from "react";
import styles from "./question.module.css";
import { ReactComponent as Arrow } from "../../../../assets/icon/buttonArrow2.svg";
import SaveButton from "../../../Detals/SaveButton/saveButton";
import Textarea from "../Textarea/textarea";
import AnswerVariants from "../AnswerVariants/AnswerVariants";
import VariantList from "../VariantList/variantList";
import Index3 from "../../../Detals/LoadMedia/index3/index";
import Index4 from "../../../Detals/LoadMedia/index4/index";

const Question = ({ question, number, type, img, isMainBlock }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [characterCount, setCharacterCount] = useState(1);

  console.log(type);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {type !== "1.2" &&
            (isMainBlock ? "Основной блок" : `Вопрос №${question + 1}`)}
          {type === "1.2" && `Слова 1-${number}`}
        </h2>
        <button
          onClick={toggleAccordion}
          className={isOpen ? styles.rotate : ""}
        >
          <Arrow />
        </button>
      </div>

      {isOpen && (
        <div className={styles.content}>
          {type === "1.0" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "462px", height: "622px" }}>
                  <Index4
                    title={"Загрузите картинки или анимацию"}
                    subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
                    src={[img[0][0], img[0][1]]}
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
                    mainTitle={"Напишите текст ответа"}
                    subtitle={
                      "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                    }
                    title={"Текст вопроса / действия"}
                    value={"Как правильно поздороваться с учителем?"}
                  />
                  <Textarea
                    mainTitle={"Напишите текст вопроса / действия"}
                    subtitle={
                      "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                    }
                    title={"Текст ответа"}
                    value={"Здравствуйте"}
                  />
                </div>
              </div>
              <div className={styles.saveButton}>
                <SaveButton text={"Сохранить"} hideIcon={true} />
              </div>
            </div>
          )}
          {type === "1.1" && (
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
          )}
          {type === "1.2" && (
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
          )}
          {type === "1.3" && (
            <div>
              <div>
                {isMainBlock ? (
                  <div style={{ width: "645px", height: "664px" }}>TLC</div>
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
          )}
          {type === "1.4" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Textarea
                  width={"505px"}
                  mainTitle={"Напишите текст ответа"}
                  subtitle={
                    "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                  }
                  title={"Текст вопроса / действия"}
                  value={"Как правильно поздороваться с учителем?"}
                />
                <Textarea
                  width={"505px"}
                  mainTitle={"Напишите текст вопроса / действия"}
                  subtitle={
                    "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                  }
                  title={"Текст ответа"}
                  value={"Здравствуйте"}
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
                      "https://avatars.githubusercontent.com/u/152501142?v=4",
                      "https://avatars.githubusercontent.com/u/152501142?v=4",
                    ]}
                    content={[
                      {
                        wrapper: { width: "626px" },
                        content: { height: "473px" },
                        card: { width: "256px" },
                        img: { width: "200px" },
                      },
                    ]}
                    checkbox={true}
                    textarea={true}
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
              </div>
              <div className={styles.saveButton}>
                <SaveButton text={"Сохранить"} hideIcon={true} />
              </div>
            </div>
          )}
          {type === "1.5" && (
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
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
