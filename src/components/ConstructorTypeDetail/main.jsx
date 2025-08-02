import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { types as staticTypes } from "./data";
import bg from "../../assets/img/tooltip-container (1).png";
import SaveButton from "../Detals/SaveButton/saveButton";
import Question from "./Types/question";
import LoadMedia_Video from "../Detals/LoadMedia/index2/index";
import styles from "./main.module.css";
import GetGame from "./getGame";
import axios from "axios";

function Main() {
  const [type, setType] = useState(null);
  const [questionsNumber, setQuestionsNumber] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTypeId, setSelectedTypeId] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedTypeName, setSelectedTypeName] = useState("");
  const [module, setModule] = useState(1);
  const [block, setBlock] = useState(1);
  const [lesson, setLesson] = useState(type?.lesson);
  const [gameType, setGameType] = useState(
    Number(selectedType?.split("")[selectedType.length - 1]) + 1
  );
  const [questionCounts, setQuestionCounts] = useState({});
  const [type3Questions, setType3Questions] = useState(1);
  const [get, setGet] = useState(true);
  const [gameName, setGameName] = useState("");
  const [gameDescription, setGameDescription] = useState("");
  const [videoText, setVideoText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setGameName("");
    setGameDescription("");
    setVideoText("");
  }, [selectedType]);


  useEffect(() => {
    if (type?.lesson !== undefined) {
      setLesson(type.lesson);
    }
  }, [type]);

  useEffect(() => {
    if (selectedType) {
      setGameType(Number(selectedType.split("")[selectedType.length - 1]) + 1);
    }
  }, [selectedType]);

  useEffect(() => {
    let foundType = null;
    let foundChild = null;

    for (const parent of staticTypes) {
      const child = parent.children.find((child) => child.type === id);
      if (child) {
        foundType = parent;
        foundChild = child;
        break;
      }
    }

    if (foundType && foundChild) {
      setType(foundType);
      setSelectedType(foundChild.type);
      setSelectedTypeName(foundChild.name);
      setQuestionCounts((prev) => ({
        ...prev,
        [foundChild.type]: prev[foundChild.type] || 1,
      }));
    } else {
      navigate("/constructor");
    }
  }, [id, navigate]);

  const handleTypeChange = (type) => {
    setSelectedType(type.type);
    setSelectedTypeName(type.name);
    setQuestionCounts((prev) => ({
      ...prev,
      [type.type]: prev[type.type] || 1,
    }));
  };

  const currentQuestionCount = questionCounts[selectedType] || 1;

  const setQuestionCount = (count) => {
    setQuestionCounts((prev) => ({
      ...prev,
      [selectedType]: count,
    }));
  };

  useEffect(() => {
    let foundType = null;

    for (const parent of staticTypes) {
      const child = parent.children.find((child) => child.type === id);
      if (child) {
        foundType = parent;
        break;
      }
    }

    if (foundType) {
      setType(foundType);
    } else {
      navigate("/constructor");
    }
  }, [id, navigate]);

  useEffect(() => {
    if (selectedType) {
      navigate(`/constructor/type/${selectedType}`, { replace: true });
    }
  }, [selectedType]);

  useEffect(() => {
    setGet(true);
  }, [selectedType]);

  const token = localStorage.getItem("token");

  const handleSave = async () => {
    const result = {
      type: `game_${selectedType}`,
      module: `module_${module}`,
      block: `block_${block}`,
      lesson: `lesson_${lesson}`,
      game: `play_${gameType}`,
      lang: "uz",
      name: gameName,
      description: gameDescription,
      title_video: videoText,
      start_video: "",
      end_video: "",
      question_count: currentQuestionCount,
      is_paid: true,
      order: 0,
      questions: [],
    };

    console.log("Jo‘natilayotgan ma'lumot:", result);


    try {
      const response = await axios.post(
        "https://api.kidsru.uz/v1/game/create",
        result,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("✅ Muvaffaqiyatli yuborildi:", response.data);
      localStorage.setItem("gameId", response.data.id);
    } catch (error) {
      console.error("❌ Xatolik yuz berdi:", error.response?.data || error.message);
    }
  };


  return (
    <div>
      <GetGame
        get={get}
        type={`game_${selectedType}`}
        setGet={setGet}
        setData={setData}
      />
      <h1>{type?.name}</h1>
      <div>
        <div className={styles.wrapper}>
          <h4 className={styles.title}>Типы карты уроков</h4>
          <div className={styles.types}>
            {type?.children?.map((type, index) => (
              <div className={styles.type} key={index}>
                <label>
                  <input
                    type="radio"
                    name="type"
                    checked={selectedType === type.type}
                    onChange={() => handleTypeChange(type)}
                  />
                  {type.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.LessonMapForm} ${styles.wrapper}`}>
          <h3 className="title2">Заполните поля ниже</h3>
          <div className={styles.Selects}>
            <div>
              <label htmlFor={styles.moduleSelect}>МОДУЛЬ:</label>
              <select
                id={styles.moduleSelect}
                value={module}
                onChange={(e) => setModule(Number(e.target.value))}
                style={{ backgroundImage: `url(${bg})` }}
              >
                {[1, 2, 3].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={styles.blockSelect}>БЛОК:</label>
              <select
                id={styles.blockSelect}
                value={block}
                onChange={(e) => setBlock(Number(e.target.value))}
                style={{ backgroundImage: `url(${bg})` }}
              >
                {[1, 2, 3].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={styles.lessonSelect}>УРОК:</label>
              <select
                id={styles.lessonSelect}
                value={lesson}
                onChange={(e) => setLesson(Number(e.target.value))}
                style={{ backgroundImage: `url(${bg})` }}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={styles.gameSelect}>ИГРА:</label>
              <select
                id={styles.gameSelect}
                value={gameType}
                onChange={(e) => {
                  setGameType(Number(e.target.value));
                  lesson === "1"
                    ? setSelectedType(lesson)
                    : setSelectedType(`${lesson}_${Number(e.target.value) - 1}`);
                }}
                style={{ backgroundImage: `url(${bg})` }}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <h3 className="title2">{selectedTypeName}</h3>
          <div className={styles.flex}>
            <div>
              <div className={styles.textareaWrapper}>
                <h4 className={styles.subtitle}>Название игры по сценарию</h4>
                <textarea
                  className={styles.nameTextarea}
                  placeholder="Повторяй за мной"
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                ></textarea>
              </div>
              <div className={styles.textareaWrapper}>
                <h4 className={styles.subtitle}>Механика задач</h4>
                <textarea
                  className={styles.problemTextarea}
                  placeholder="Описание игры..."
                  value={gameDescription}
                  onChange={(e) => setGameDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div>
              <div
                className={styles.flex}
                style={{ width: "489px", height: "652px", marginTop: "50px" }}
              >
                <LoadMedia_Video
                  key={id}
                  video_1={""}
                  format_1={""}
                  video_2={""}
                  format_2={""}
                />
              </div>
              <div className={styles.textareaWrapper}>
                <h4 className={styles.subtitle}>Реплика из видео</h4>
                <textarea
                  className={styles.videoTextarea}
                  placeholder=""
                  value={videoText}
                  onChange={(e) => setVideoText(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }} className={styles.ContentWrapper}>
            <h3 className={styles.subtitle}>Количество вопросов</h3>
            <div className={styles.questionCount}>
              {(selectedType === "1_2" ? [2, 4, 6, 8] : [1, 2, 3, 4, 5, 6]).map(
                (item) => (
                  <button
                    onClick={() => setQuestionCount(item)}
                    key={item}
                    className={
                      currentQuestionCount === item ? styles.active : ""
                    }
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
          <div className={styles.saveButton}>
            <SaveButton onClick={handleSave} />
          </div>
        </div>
        {selectedType !== "1_2" &&
          selectedType !== "1_3" &&
          selectedType !== "3" &&
          selectedType !== "3_1" &&
          selectedType !== "3_2" &&
          Array.from({ length: currentQuestionCount }).map((_, index) => (
            <Question type={selectedType} question={index} key={index} />
          ))}

        {selectedType === "1_2" && (
          <Question type={selectedType} number={currentQuestionCount} />
        )}
        {selectedType === "1_3" && (
          <>
            <Question key="main-block" isMainBlock={true} type={selectedType} />
            {Array.from({ length: currentQuestionCount }).map((_, index) => (
              <Question key={index} question={index} type={selectedType} />
            ))}
          </>
        )}

        {selectedType === "3" && (
          <>
            <Question
              key="main-block"
              isMainBlock={true}
              type={selectedType}
              setType3Questions={setType3Questions}
              type3Questions={type3Questions}
            />
            {Array.from({ length: currentQuestionCount }).map(
              (_, mainBlockIndex) =>
                Array.from({ length: type3Questions }).map(
                  (_, variantIndex) => (
                    <Question
                      key={`${mainBlockIndex}_${variantIndex}`}
                      type={selectedType}
                      mainBlockIndex={mainBlockIndex + 1}
                      variantIndex={variantIndex + 1}
                    />
                  )
                )
            )}
          </>
        )}

        {selectedType === "3_1" && (
          <>
            <Question key="main-block" isMainBlock={true} type={selectedType} />
            {Array.from({ length: currentQuestionCount }).map((_, index) => (
              <Question key={index} question={index} type={selectedType} />
            ))}
          </>
        )}
        {selectedType === "3_2" && (
          <>
            <Question key="main-block" isMainBlock={true} type={selectedType} />
            {Array.from({ length: currentQuestionCount }).map((_, index) => (
              <Question key={index} question={index} type={selectedType} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
