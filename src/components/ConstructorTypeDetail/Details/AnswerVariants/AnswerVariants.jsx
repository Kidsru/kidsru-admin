import { useState, useEffect } from "react";
import styles from "./answerVariants.module.css";
import { IoClose } from "react-icons/io5";
import { ReactComponent as AddIcon } from "../../../../assets/icon/add.svg";
import Button from "../../../Detals/SubmitButton/button";

const AnswerVariants = ({ count = 1, subtitle, typeFour, max = 8, setCharacterCount }) => {
  const [variants, setVariants] = useState(() =>
    Array.from({ length: count }, (_, i) => ({ id: i + 1, text: "" }))
  );

  useEffect(() => {
    setVariants((prev) => {
      const limitedCount = Math.min(count, max);

      if (prev.length === limitedCount) return prev;

      if (prev.length < limitedCount) {
        const nextId = prev.length > 0 ? Math.max(...prev.map(v => v.id)) + 1 : 1;
        const additional = Array.from({ length: limitedCount - prev.length }, (_, i) => ({
          id: nextId + i,
          text: ""
        }));
        return [...prev, ...additional];
      }

      return prev.slice(0, limitedCount);
    });
  }, [count, max]);

  useEffect(() => {
    if (setCharacterCount) {
      setCharacterCount(variants.length);
    }
  }, [variants.length, setCharacterCount]);

  const handleAdd = () => {
    if (variants.length >= max) return;
    const nextId = variants.length > 0 ? Math.max(...variants.map(v => v.id)) + 1 : 1;
    setVariants((prev) => [...prev, { id: nextId, text: "" }]);
  };

  const handleRemove = (id) => {
    setVariants((prev) => prev.filter((v) => v.id !== id));
  };

  const handleChange = (id, value) => {
    setVariants((prev) =>
      prev.map((v) => (v.id === id ? { ...v, text: value } : v))
    );
  };

  const handleSubmit = () => {
    console.log(variants);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.mainTitle}>
        Напишите текста ответов <span className="redText">*</span>
      </h3>
      <div
        style={{
          display: "flex",
          marginBottom: "15px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className={styles.subtitle}>
          {subtitle ||
            "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."}
        </p>
        <button onClick={handleAdd} className={styles.addButton}>
          <AddIcon /> Добавить
        </button>
      </div>
      <div className={styles.container}>
        {variants.map((v, index) => (
          <div key={v.id} className={styles.card}>
            <button
              className={styles.closeBtn}
              onClick={() => handleRemove(v.id)}
            >
              <IoClose />
            </button>
            <h3 className={styles.title}>
              {typeFour ? "Пара слов" : "Вариант"} №{index + 1}
            </h3>
            <label className={styles.label}>Текст ответа</label>
            <textarea
              className={styles.textarea}
              value={v.text}
              onChange={(e) => handleChange(v.id, e.target.value)}
              placeholder="Здравствуйте"
            />
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <Button onClick={handleSubmit} text={"Готово"} />
      </div>
    </div>
  );
};

export default AnswerVariants;
