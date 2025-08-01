import { useState } from "react";
import Index1 from "../../../Detals/LoadMedia/index1/index";
import Index3 from "../../../Detals/LoadMedia/index3/index";
import SaveButton from "../../../Detals/SaveButton/saveButton";
import CorrectAnsweTextarea from "../../Details/CorrectAnswerTextArea/CorrectAnsweTextarea.module";
import Textarea from "../../Details/Textarea/textarea";
import styles from "../question.module.css";
import { endpoints } from "../../../../services/api.js";

const Type3_0 = ({
  characterCount,
  setCharacterCount,
  question,
  number,
  isMainBlock,
  setType3Questions,
  type,
}) => {
  const [questionText, setQuestionText] = useState("");
  const [variants, setVariants] = useState([]);
  const [profileImage, setProfileImage] = useState(null); // API ga yuboriladigan rasm
  const [uploadedImg, setUploadedImg] = useState(null); // Frontendda ko'rsatiladigan rasm

  console.log(questionText, variants);

  const handleImageChange = (result) => {
    console.log(
      "✅ Qaytgan rasm:",
      endpoints.GET_MEDIA_UPLOADS + result.filename
    );
    setUploadedImg(endpoints.GET_MEDIA_UPLOADS + result.filename);
    setProfileImage(result);
  };

  const handleButtonClick = () => {
    if (question && variants) {
      console.log("Question:", questionText);
      console.log("Variants:", variants);
    } else {
      alert("Вы не нажали кнопку «Готово».");
    }
  };

  return (
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
                key={uploadedImg}
                onImageChange={handleImageChange}
                src={uploadedImg}
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
                    Сколько вариантов? <span className="redText">*</span>
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
                        className={characterCount === item ? styles.active : ""}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <Textarea
                setValue={setQuestionText}
                width={"413px"}
                height={"227px"}
                mainTitle={"Загрузите озвучку и текст вопроса / действия"}
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
              setValue={setVariants}
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
        <SaveButton
          onClick={handleButtonClick}
          text={"Сохранить"}
          hideIcon={true}
        />
      </div>
    </div>
  );
};

export default Type3_0;
