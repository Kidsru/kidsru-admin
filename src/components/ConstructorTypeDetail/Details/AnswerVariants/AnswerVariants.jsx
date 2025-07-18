import { useState, useEffect } from "react";
import styles from "./answerVariants.module.css";
import { IoClose } from "react-icons/io5";
import Button from "../../../Detals/SubmitButton/button";

const AnswerVariants = ({ count = 1 }) => {
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    setVariants(
      Array.from({ length: count }, (_, i) => ({ id: i + 1, text: "" }))
    );
  }, [count]);

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
    
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.mainTitle}>Напишите текста ответов <span className="redText">*</span></h3>
      <p className={styles.subtitle}>
        Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть.
      </p>
      <div className={styles.container}>
        {variants.map((v, index) => (
          <div key={v.id} className={styles.card}>
            <button className={styles.closeBtn} onClick={() => handleRemove(v.id)}>
              <IoClose />
            </button>
            <h3 className={styles.title}>Вариант №{index + 1}</h3>
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
