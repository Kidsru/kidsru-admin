import { useState } from "react";
import styles from "./lessonMap.module.css";
import Type1 from "./type1";
import Type2 from "./type2";
import Type3 from "./type3";
import Type4 from "./type4";

const LessonMap = () => {
  const [selectedType, setSelectedType] = useState(1);

  const renderComponent = () => {
    switch (selectedType) {
      case 1:
        return <Type1 />;
      case 2:
        return <Type2 />;
      case 3:
        return <Type3 />;
      case 4:
        return <Type4 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h3 className="title2">Карта уроков</h3>
      <div className="wrapper" style={{ width: "1100px" }}>
        <h4 className={styles.title}>Типы карты уроков</h4>
        <div className={styles.types}>
          <div className={styles.type}>
            <input
              type="radio"
              name="type"
              checked={selectedType === 1}
              onChange={() => setSelectedType(1)}
            />
            <p>Тип 1. Первый блок (Блок 1; Уроки 1-3; кнопка “Перейти”)</p>
          </div>
          <div className={styles.type}>
            <input
              type="radio"
              name="type"
              checked={selectedType === 2}
              onChange={() => setSelectedType(2)}
            />
            <p>Тип 2. Второй - универсальный (кнопка “Вернуться”; 3 Урока; кнопка “Перейти”)</p>
          </div>
          <div className={styles.type}>
            <input
              type="radio"
              name="type"
              checked={selectedType === 3}
              onChange={() => setSelectedType(3)}
            />
            <p>Тип 3. Следующие блоки (кнопка “Вернуться”; Блок №; 3 Урока; кнопка “Перейти”)</p>
          </div>
          <div className={styles.type}>
            <input
              type="radio"
              name="type"
              checked={selectedType === 4}
              onChange={() => setSelectedType(4)}
            />
            <p>Тип 4. Контрольная работа (кнопка “Вернуться”; Контрольная работа; 1 Урок - 5 игр; кнопка “Перейти”)</p>
          </div>
        </div>
      </div>

      {renderComponent()}
    </div>
  );
};

export default LessonMap;
