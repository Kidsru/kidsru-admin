import { useState } from "react";
import styles from "./question.module.css";
import { ReactComponent as Arrow } from "../../../../assets/icon/buttonArrow2.svg";
import SaveButton from "../../../Detals/SaveButton/saveButton";
import Textarea from "../Textarea/textarea";
import AnswerVariants from "../AnswerVariants/AnswerVariants";
import VariantList from "../VariantList/variantList";
import Index1 from "../../../Detals/LoadMedia/index1/index";
import Index3 from "../../../Detals/LoadMedia/index3/index";
import Index4 from "../../../Detals/LoadMedia/index4/index";
import CorrectAnsweTextarea from "../CorrectAnswerTextArea/CorrectAnsweTextarea.module";
import VariantList2 from "../VariantList2/variantList2";
import React from "react";

const Question = ({
  question,
  number,
  type,
  img,
  setType3Questions,
  isMainBlock,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [characterCount, setCharacterCount] = useState(1);

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
          {type === "2.0" && (
            <div>
              <Textarea
                width={"1040px"}
                mainTitle={"Загрузите озвучку и текст вопроса / действия"}
                subtitle={
                  "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                }
                title={"Текст вопроса / действия"}
                value={"Выберите правильный ответ"}
              />
              <div className={styles.flex}>
                <div
                  style={{
                    width: "400px",
                    height: "774px",
                  }}
                >
                  <Index3
                    title={"Загрузите картинку или анимацию"}
                    subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
                    src={""}
                    width={"400px"}
                    imgWidth={"352px"}
                    imgheight={"352px"}
                    gap={"43px"}
                    textarea={false}
                  />
                </div>
                <div>
                  <div
                    style={{ height: "134px" }}
                    className={styles.questionCountWrapper}
                  >
                    <h3 className={styles.questionCountTitle}>
                      Сколько вариантов? <span className="redText">*</span>
                    </h3>
                    <div
                      style={{ width: "573px" }}
                      className={styles.questionCount}
                    >
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <button
                          onClick={() => setCharacterCount(item)}
                          key={item}
                          className={
                            characterCount === item ? styles.active : ""
                          }
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <CorrectAnsweTextarea
                    key={`q${question}_n${number}`}
                    count={characterCount}
                    setCount={setCharacterCount}
                  />
                </div>
              </div>
              <div className={styles.saveButton}>
                <SaveButton text={"Сохранить"} hideIcon={true} />
              </div>
            </div>
          )}
          {type === "2.1" && (
            <div>
              <Textarea
                width={"1040px"}
                mainTitle={"Загрузите озвучку и текст вопроса / действия"}
                subtitle={
                  "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                }
                title={"Текст вопроса / действия"}
                value={"Выберите правильный ответ"}
              />
              <div className={styles.flex}>
                <div>
                  <div
                    style={{ height: "162px" }}
                    className={styles.questionCountWrapper}
                  >
                    <h3 className={styles.questionCountTitle}>
                      Сколько вариантов? <span className="redText">*</span>
                    </h3>
                    <div
                      style={{ width: "428px" }}
                      className={styles.questionCount}
                    >
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <button
                          onClick={() => setCharacterCount(item)}
                          key={item}
                          className={
                            characterCount === item ? styles.active : ""
                          }
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "468px",
                      height: "638px",
                    }}
                  >
                    <Index4
                      title={"Загрузите картинки или анимацию"}
                      subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
                      src={[
                        "https://picsum.photos/1024/1024?random=1",
                        "https://picsum.photos/1024/1024?random=2",
                      ]}
                      content={[
                        {
                          wrapper: { width: "468px" },
                          content: { height: "339px" },
                          card: { width: "174px" },
                          img: { width: "150px" },
                        },
                      ]}
                      options={false}
                      checkbox={false}
                      textarea={false}
                      cardTitle={[{ title: "Силуэт" }, { title: "Картинка" }]}
                    />
                  </div>
                </div>
                <CorrectAnsweTextarea
                  contentHeight={"619px"}
                  width={"545px"}
                  height={"828px"}
                  key={`q${question}_n${number}`}
                  count={characterCount}
                  setCount={setCharacterCount}
                />
              </div>
              <div className={styles.saveButton}>
                <SaveButton text={"Сохранить"} hideIcon={true} />
              </div>
            </div>
          )}
          {type === "2.2" && (
            <div>
              <Textarea
                width={"1040px"}
                mainTitle={"Загрузите озвучку и текст вопроса / действия"}
                subtitle={
                  "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                }
                title={"Текст вопроса / действия"}
                value={"Выберите правильный ответ"}
              />
              <div className={styles.flex}>
                <div>
                  <div
                    style={{ height: "162px" }}
                    className={styles.questionCountWrapper}
                  >
                    <h3 className={styles.questionCountTitle}>
                      Сколько вариантов? <span className="redText">*</span>
                    </h3>
                    <div
                      style={{ width: "428px" }}
                      className={styles.questionCount}
                    >
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <button
                          onClick={() => setCharacterCount(item)}
                          key={item}
                          className={
                            characterCount === item ? styles.active : ""
                          }
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "468px",
                      height: "638px",
                    }}
                  >
                    <Index4
                      title={"Загрузите картинки или анимацию"}
                      subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
                      src={[
                        "https://picsum.photos/1024/1024?random=1",
                        "https://picsum.photos/1024/1024?random=2",
                      ]}
                      content={[
                        {
                          wrapper: { width: "468px" },
                          content: { height: "401px" },
                          card: { width: "174px" },
                          img: { width: "150px" },
                        },
                      ]}
                      options={false}
                      checkbox={false}
                      textarea={false}
                      cardTitle={[{ title: "Силуэт" }, { title: "Картинка" }]}
                    />
                  </div>
                </div>
                <CorrectAnsweTextarea
                  contentHeight={"619px"}
                  width={"545px"}
                  height={"828px"}
                  key={`q${question}_n${number}`}
                  count={characterCount}
                  setCount={setCharacterCount}
                />
              </div>
              <div className={styles.saveButton}>
                <SaveButton text={"Сохранить"} hideIcon={true} />
              </div>
            </div>
          )}
          {type === "2.3" && (
            <div>
              <div style={{ marginBottom: "30px" }} className={styles.flex}>
                <div
                  style={{ height: "162px" }}
                  className={styles.questionCountWrapper}
                >
                  <h3 className={styles.questionCountTitle}>
                    Сколько вариантов? <span className="redText">*</span>
                  </h3>
                  <div
                    style={{ width: "465px" }}
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
                <Textarea
                  width={"505px"}
                  mainTitle={"Загрузите озвучку и текст вопроса / действия"}
                  subtitle={
                    "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                  }
                  title={"Текст вопроса / действия"}
                  value={"Добавить картинку “Добрый вечер”"}
                />
              </div>
              <div
                style={{
                  width: "1040px",
                }}
              >
                <Index4
                  title={"Загрузите картинки или анимацию"}
                  subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
                  src={[
                    "https://picsum.photos/1024/1024?random=1",
                    "https://picsum.photos/1024/1024?random=2",
                    "https://picsum.photos/1024/1024?random=3",
                    "https://picsum.photos/1024/1024?random=4",
                  ]}
                  content={[
                    {
                      wrapper: { width: "1040px" },
                      content: { height: "675px" },
                      card: { width: "379px" },
                      img: { width: "200px" },
                    },
                  ]}
                  options={true}
                  checkbox={true}
                  defaultCheck={2}
                  textarea={true}
                  cardTitle={[
                    { title: "Картинка без надписи" },
                    { title: "Картинка с надписью" },
                  ]}
                  textareaContent={[
                    {
                      value: "Добрый день",
                    },
                    {
                      value: "Добрый день",
                    },
                    {
                      value: "Добрый день",
                    },
                    {
                      value: "Добрый день",
                    },
                  ]}
                />
              </div>
              <div className={styles.saveButton}>
                <SaveButton text={"Сохранить"} hideIcon={true} />
              </div>
            </div>
          )}
          {type === "2.4" && (
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
                height={""}
                textareaTitle={"Текст реплик"}
                width={"1041px"}
                contentWidth={"993px"}
                count={characterCount}
                initialCharacters={Array(characterCount).fill(1)}
              />
              <div className={styles.flex}>
                <VariantList2
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
                <SaveButton text={"Сохранить"} hideIcon={true} />
              </div>
            </div>
          )}
          {type === "3.0" && (
            <div>
              <div>
                {isMainBlock ? (
                  <div className={styles.flex}>
                    <div
                      style={{
                        width: "600px",
                      }}
                    >
                      <Index1
                        title={"Загрузите картинку или анимацию"}
                        subtitle={
                          "Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ."
                        }
                        size={{
                          wrapper: "600px",
                          image: "416px",
                          gap: "44.5px",
                        }}
                      />
                    </div>
                    <div>
                      {type === "3.0" && isMainBlock && (
                        <div
                          style={{ height: "162px" }}
                          className={styles.questionCountWrapper}
                        >
                          <h3 className={styles.questionCountTitle}>
                            Сколько вариантов?{" "}
                            <span className="redText">*</span>
                          </h3>
                          <div
                            style={{ width: "373px" }}
                            className={styles.questionCount}
                          >
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                              <button
                                onClick={() => {
                                  setCharacterCount(item);
                                  setType3Questions(item);
                                  console.log("type3Questions:", item);
                                }}
                                key={item}
                                className={
                                  characterCount === item ? styles.active : ""
                                }
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      <Textarea
                        width={"413px"}
                        height={"227px"}
                        mainTitle={
                          "Загрузите озвучку и текст вопроса / действия"
                        }
                        subtitle={
                          "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                        }
                        title={"Текст вопроса / действия"}
                        value={"Перетащите цвета на картинки"}
                      />
                    </div>
                  </div>
                ) : (
                  <div className={styles.flex}>
                    <div
                      style={{
                        width: "400px",
                      }}
                    >
                      <Index3
                        title={"Загрузите картинку или анимацию"}
                        subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
                        src={""}
                        width={"400px"}
                        imgWidth={"352px"}
                        imgheight={"352px"}
                        gap={"30px"}
                        textarea={false}
                      />
                    </div>
                    <CorrectAnsweTextarea
                      coloredButton={true}
                      contentHeight={"443px"}
                      width={"613px"}
                      height={"681px"}
                      key={`q${question}_n${number}`}
                      count={characterCount}
                      setCount={setCharacterCount}
                    />
                  </div>
                )}
              </div>
              <div className={styles.saveButton}>
                <SaveButton text={"Сохранить"} hideIcon={true} />
              </div>
            </div>
          )}
          {type === "3.1" && (
            <div>
              <div>
                {isMainBlock ? (
                  <div className={styles.flex}>
                    <div
                      style={{ height: "162px" }}
                      className={styles.questionCountWrapper}
                    >
                      <h3 className={styles.questionCountTitle}>
                        Сколько вариантов? <span className="redText">*</span>
                      </h3>
                      <div
                        style={{ width: "464px" }}
                        className={styles.questionCount}
                      >
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <button
                            onClick={() => {
                              setCharacterCount(item);
                            }}
                            key={item}
                            className={
                              characterCount === item ? styles.active : ""
                            }
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                    <Textarea
                      width={"504px"}
                      height={"83px"}
                      mainTitle={"Загрузите озвучку и текст вопроса / действия"}
                      subtitle={
                        "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                      }
                      title={"Текст вопроса / действия"}
                      value={"Перетащите цвета на картинки"}
                    />
                  </div>
                ) : (
                  Array.from({ length: 2 }).map((_, index) => (
                    <React.Fragment key={`${index}-${characterCount}`}>
                      <VariantList2
                        mainTitle={`Напишите текста ответов реплики ${
                          index + 1
                        } для персонажей и выберите правильный ответ *`}
                        textareaTitle="Текст реплик"
                        width="1039px"
                        contentWidth="1000px"
                        count={characterCount}
                        initialCharacters={Array(characterCount).fill(2)}
                      />
                    </React.Fragment>
                  ))
                )}
              </div>
              <div className={styles.saveButton}>
                <SaveButton text={"Сохранить"} hideIcon={true} />
              </div>
            </div>
          )}
          {type === "3.2" && (
            <div>
              <div>
                {isMainBlock ? (
                  <div className={styles.flex}>
                    <div
                      style={{
                        width: "595px",
                      }}
                    >
                      <Index1
                        size={{ wrapper: "595px", image: "411px", gap: "23" }}
                        title={"Загрузите картинку или анимацию"}
                        subtitle={
                          "Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ."
                        }
                      />
                    </div>
                    <div>
                      <div
                        style={{ height: "162px" }}
                        className={styles.questionCountWrapper}
                      >
                        <h3 className={styles.questionCountTitle}>
                          Сколько вариантов? <span className="redText">*</span>
                        </h3>
                        <div
                          style={{ width: "378px" }}
                          className={styles.questionCount}
                        >
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                            <button
                              onClick={() => {
                                setCharacterCount(item);
                              }}
                              key={item}
                              className={
                                characterCount === item ? styles.active : ""
                              }
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                      <Textarea
                        width={"418px"}
                        height={"179px"}
                        mainTitle={
                          "Загрузите озвучку и текст вопроса / действия"
                        }
                        subtitle={
                          "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                        }
                        title={"Текст вопроса / действия"}
                        value={"Перетащите цвета на картинки"}
                      />
                    </div>
                  </div>
                ) : (
                  Array.from({ length: 2 }).map((_, index) => (
                    <React.Fragment key={`${index}-${characterCount}`}>
                      <VariantList2
                        mainTitle={`Напишите текста ответов реплики ${
                          index + 1
                        } для персонажей и выберите правильный ответ *`}
                        textareaTitle="Текст реплик"
                        width="1039px"
                        contentWidth="1000px"
                        count={characterCount}
                        initialCharacters={Array(characterCount).fill(2)}
                      />
                    </React.Fragment>
                  ))
                )}
              </div>
              <div className={styles.saveButton}>
                <SaveButton text={"Сохранить"} hideIcon={true} />
              </div>
            </div>
          )}
          {type === "4.0" && (
            <div>
              <div className={styles.flex}>
                <div
                  style={{ height: "162px" }}
                  className={styles.questionCountWrapper}
                >
                  <h3 className={styles.questionCountTitle}>
                    Сколько вариантов? <span className="redText">*</span>
                  </h3>
                  <div
                    style={{ width: "464px" }}
                    className={styles.questionCount}
                  >
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <button
                        onClick={() => {
                          setCharacterCount(item);
                        }}
                        key={item}
                        className={characterCount === item ? styles.active : ""}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <Textarea
                  width={"504px"}
                  height={"83px"}
                  mainTitle={"Загрузите озвучку и текст вопроса / действия"}
                  subtitle={
                    "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                  }
                  title={"Текст вопроса / действия"}
                  value={"Перетащите цвета на картинки"}
                />
              </div>
              <AnswerVariants
                typeFour={true}
                count={characterCount}
                subtitle={"Привет"}
                max={6}
                setCharacterCount={setCharacterCount}
              />
            </div>
          )}
          {type === "5.0" && (
            <div>
              <div className={styles.flex}>
                <div
                  style={{ height: "162px" }}
                  className={styles.questionCountWrapper}
                >
                  <h3 className={styles.questionCountTitle}>
                    Сколько вариантов? <span className="redText">*</span>
                  </h3>
                  <div
                    style={{ width: "464px" }}
                    className={styles.questionCount}
                  >
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <button
                        onClick={() => {
                          setCharacterCount(item);
                        }}
                        key={item}
                        className={characterCount === item ? styles.active : ""}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <Textarea
                  width={"504px"}
                  height={"83px"}
                  mainTitle={"Загрузите озвучку и текст вопроса / действия"}
                  subtitle={
                    "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                  }
                  title={"Текст вопроса / действия"}
                  value={"Перетащите цвета на картинки"}
                />
              </div>
              <div
                style={{ flexWrap: "wrap", gap: "30px" }}
                className={styles.flex}
              >
                {Array.from({ length: characterCount }).map((_, index) => (
                  <VariantList
                    key={index}
                    typeFive={true}
                    mainTitle={
                      "Напишите текста ответов для левого и правого рядов"
                    }
                    subtitle={
                      "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
                    }
                    count={characterCount}
                    initialCharacters={Array.from({
                      length: characterCount,
                    }).map(() => 1)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
