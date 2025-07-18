import { useLocation } from "react-router-dom";
import TranslationsHistory from "../../Detals/TranslationsHistory/TranslationsHistory";
import bg from "../../../assets/img/tooltip-container (1).png";
import { useEffect, useState } from "react";
import Filter from "../../Filter/filter";
import Table from "../../Table/table";
import styles from "./achievements.module.css";
import Button from "../../Detals/SubmitButton/button";
import Index3 from "../../Detals/LoadMedia/index3/index";
import achievementsImg from "../../../assets/img/achievements.png";

const data = [
  {
    id: "M1B1L1ACH1",
    title: "Мастер приветствий",
    description: "Присуждается за прохождение всех игр на первом уроке Блока 1",
    gameCount: 4,
    approved: true,
    createdAt: "06 апреля 2025",
    module: 1,
    block: 1,
    lesson: 1,
  },
  {
    id: "M1B1L1ACH1",
    title: "Мастер приветствий",
    description: "Присуждается за прохождение всех игр на первом уроке Блока 1",
    gameCount: 4,
    approved: true,
    createdAt: "06 апреля 2025",
    module: 1,
    block: 1,
    lesson: 2,
  },
  {
    id: "M1B1L1ACH1",
    title: "Мастер приветствий",
    description: "Присуждается за прохождение всех игр на первом уроке Блока 1",
    gameCount: 4,
    approved: true,
    createdAt: "06 апреля 2025",
    module: 1,
    block: 1,
    lesson: 3,
  },
  {
    id: "M1B1L1ACH1",
    title: "Мастер приветствий",
    description: "Присуждается за прохождение всех игр на первом уроке Блока 1",
    gameCount: 4,
    approved: true,
    createdAt: "06 апреля 2025",
    module: 1,
    block: 1,
    lesson: 4,
  },
  {
    id: "M1B1L1ACH1",
    title: "Мастер приветствий",
    description: "Присуждается за прохождение всех игр на первом уроке Блока 1",
    gameCount: 4,
    approved: true,
    createdAt: "06 апреля 2025",
    module: 1,
    block: 1,
    lesson: 5,
  },
  {
    id: "M1B1L1ACH1",
    title: "Мастер приветствий",
    description: "Присуждается за прохождение всех игр на первом уроке Блока 1",
    gameCount: 4,
    approved: false,
    createdAt: "06 апреля 2025",
    module: 1,
    block: 1,
    lesson: 6,
  },
  {
    id: "M1B1L1ACH1",
    title: "Мастер приветствий",
    description: "Присуждается за прохождение всех игр на первом уроке Блока 1",
    gameCount: 4,
    approved: false,
    createdAt: "06 апреля 2025",
    module: 1,
    block: 2,
    lesson: 1,
  },
  {
    id: "M1B1L1ACH1",
    title: "Мастер приветствий",
    description: "Присуждается за прохождение всех игр на первом уроке Блока 1",
    gameCount: 4,
    approved: false,
    createdAt: "06 апреля 2025",
    module: 1,
    block: 2,
    lesson: 2,
  },
  {
    id: "M1B1L1ACH1",
    title: "Мастер приветствий",
    description: "Присуждается за прохождение всех игр на первом уроке Блока 1",
    gameCount: 4,
    approved: false,
    createdAt: "06 апреля 2025",
    module: 1,
    block: 2,
    lesson: 3,
  },
  {
    id: "M1B1L1ACH1",
    title: "Мастер приветствий",
    description: "Присуждается за прохождение всех игр на первом уроке Блока 1",
    gameCount: 4,
    approved: false,
    createdAt: "06 апреля 2025",
    module: 1,
    block: 2,
    lesson: 4,
  },
];

const AddWordsPage = () => {
  const location = useLocation();
  const { breadcrumb = "" } = location.state || {};

  const [module, setModule] = useState(1);
  const [block, setBlock] = useState(1);
  const [lesson, setLesson] = useState(1);

  useEffect(() => {
    const parts = breadcrumb.split(" / ");

    parts.forEach((part) => {
      if (part.includes("Модуль")) {
        const match = part.match(/Модуль\s+(\d+)/);
        if (match) setModule(Number(match[1]));
      } else if (part.includes("Блок")) {
        const match = part.match(/Блок\s+(\d+)/);
        if (match) setBlock(Number(match[1]));
      } else if (part.includes("Урок")) {
        const match = part.match(/Урок\s+(\d+)/);
        if (match) setLesson(Number(match[1]));
      }
    });
  }, [breadcrumb]);

  const handleDelete = (id) => {
    console.log(`Delete word with id: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Edit word with id: ${id}`);
  };

  const [inputValue, setInputValue] = useState("");

  const filteredData = data.filter((user) => {
    const lower = inputValue.toLowerCase();
    return (
      user.title.toLowerCase().includes(lower) ||
      user.id.toString().includes(lower)
    );
  });
  return (
    <div>
      <h4 className="title2">Словарь</h4>
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
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
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
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.SelectorLast}>
            <div>
              <label htmlFor={styles.lessonSelect}>УРОК</label>
              <select
                id={styles.lessonSelect}
                value={lesson}
                onChange={(e) => setLesson(Number(e.target.value))}
                style={{ backgroundImage: `url(${bg})` }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ minWidth: "1100px", padding: "30px", borderRadius: "20px" }}
        className="wrapper"
      >
        <h3 className="title2">Конструктора слов</h3>
        <div className={styles.flex}>
          <div>
            <Index3
              title={"Загрузите иконку"}
              subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
              src={achievementsImg}
              width={"263px"}
              imgWidth={"215px"}
              imgheight={"215px"}
              gap={"21.34px"}
            />
            <div style={{marginTop:"30px"}}>
              <h3 className={styles.selectTitle}>Выберите количество игр</h3>
              <div className={styles.Selects}>
                <div style={{width:"fit-content"}}>
                  <label htmlFor={styles.moduleSelect}>ИГР</label>
                  <select
                    id={styles.moduleSelect}
                    value={module}
                    onChange={(e) => setModule(Number(e.target.value))}
                    style={{ backgroundImage: `url(${bg})` }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="wrapper"
              style={{ padding: "24px", borderRadius: "15px" }}
            >
              <h4 className={styles.title}>
                Напишите название достижения <span className="redText">*</span>
              </h4>
              <p className={styles.subtitle}>
                Пожалуйста, проверьте правильность написания слов и знаки
                препинания, если они есть.
              </p>
              <div>
                <h4 className={styles.title}>Text</h4>
                <textarea
                  className={styles.textarea}
                  placeholder="Мастер приветствий"
                ></textarea>
                <div style={{ textAlign: "right" }}>
                  <Button text={"Готово"} />
                </div>
              </div>
            </div>
            <div
              className="wrapper"
              style={{
                padding: "24px",
                marginTop: "30px",
                borderRadius: "15px",
              }}
            >
              <h4 className={styles.title}>
                Напишите описание <span className="redText">*</span>
              </h4>
              <p className={styles.subtitle}>
                Пожалуйста, проверьте правильность написания слов и знаки
                препинания, если они есть.
              </p>
              <div>
                <h4 className={styles.title}>Text</h4>
                <textarea
                  className={styles.textarea}
                  placeholder="Присуждается за прохождение всех игр на первом уроке"
                ></textarea>
                <div style={{ textAlign: "right" }}>
                  <Button text={"Готово"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "45px" }}>
        <h3 className="title2">{`Модуль ${module}`}</h3>
        <div style={{ minWidth: "100%" }} className="wrapper">
          <Filter onInputChange={setInputValue} number={filteredData.length} />
          <Table
            achievements={true}
            itemsPerPage={10}
            thead={[
              "id",
              "Название",
              "Описание",
              "Кол-во игр",
              "Дата создания",
              "Утвердить",
              "Модуль",
              "Блок",
              "Урок",
              "Действия",
            ]}
            data={filteredData}
            hideView={true}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default AddWordsPage;
