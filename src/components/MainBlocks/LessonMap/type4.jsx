import { useState, useEffect } from "react";
import styles from "./lessonMap.module.css";
import bg from "../../../assets/img/tooltip-container (1).png";
import { FaAngleRight } from "react-icons/fa6";

const Type4 = () => {
  const [module, setModule] = useState(1);
  const [block, setBlock] = useState(1);
  const [blockName, setBlockName] = useState("");
  const [lessonText, setLessonText] = useState("");
  const [lessonPlaceholder, setLessonPlaceholder] = useState("");

  // 🔁 Backenddan ma’lumot olish
  const fetchBackendData = async () => {
    // Hozircha soxta data
    const backendData = {
      blockName: "Контрольная работа",
      lesson: `Урок 1.\n«Контрольная игра с 5 заданиями»`,
    };

    setBlockName(backendData.blockName);
    setLessonPlaceholder(backendData.lesson);
    setLessonText("");
  };

  // 🔁 module yoki block o‘zgarganda ma’lumotni yangilash
  useEffect(() => {
    fetchBackendData();
  }, [module, block]);

  const handleSubmit = () => {
    const data = {
      module,
      block,
      blockName,
      lesson: lessonText || lessonPlaceholder,
    };

    console.log("Jo‘natilayotgan ma’lumot:", data);
  };

  return (
    <div>
      <div className={styles.LessonMapForm}>
        <h3>Заполните поля ниже</h3>
        <div className={styles.Selects}>
          <div>
            <label htmlFor={styles.moduleSelect}>МОДУЛЬ</label>
            <select
              id={styles.moduleSelect}
              value={module}
              onChange={(e) => setModule(Number(e.target.value))}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <label htmlFor={styles.blockSelect}>БЛОК</label>
            <select
              id={styles.blockSelect}
              value={block}
              onChange={(e) => setBlock(Number(e.target.value))}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.LessonMapForm2}>
        <h2>
          Тип 4. Контрольная работа (кнопка “Вернуться”; Контрольная работа; блок {block}; 1 Урок - 5 игр; кнопка “Перейти”)
        </h2>
        <div className={styles.wrpTextArea}>
          <div className={styles.lessonTextArea}>
            <h3>
              Название Контрольной работы <span>*</span>
            </h3>
            <textarea
              placeholder="Контрольная работа"
              value={blockName}
              onChange={(e) => setBlockName(e.target.value)}
            ></textarea>
          </div>

          <div className={styles.lessonTextArea}>
            <h3>
              Урок 1 <span>*</span>
            </h3>
            <textarea
              placeholder={lessonPlaceholder}
              value={lessonText}
              onChange={(e) => setLessonText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className={styles.wrpBtn}>
          <button onClick={handleSubmit}>
            Сохранить <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Type4;
