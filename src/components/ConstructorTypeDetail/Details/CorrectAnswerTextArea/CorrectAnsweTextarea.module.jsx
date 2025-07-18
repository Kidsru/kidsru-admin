import React, { useEffect, useState } from "react";
import styles from "./correctAnsweTextarea.module.css";
import Button from "../../../Detals/SubmitButton/button";

const CorrectAnsweTextarea = ({ count = 3, initialCharacters = [], width }) => {
    const [selectedIndex, setSelectedIndex] = useState(null); // faqat bitta variant uchun checkbox
    const [variants, setVariants] = useState([]);

    useEffect(() => {
        setVariants(
            Array.from({ length: count }, (_, i) => ({
                character: initialCharacters[i] || 1,
                text: "",
            }))
        );
        setSelectedIndex(null); // har safar count o'zgarsa tozalansin
    }, [count, initialCharacters]);

    const handleTextChange = (index, value) => {
        const updated = [...variants];
        updated[index].text = value;
        setVariants(updated);
    };

    const handleCheckboxChange = (index) => {
        setSelectedIndex(index); // faqat bitta variant tanlanadi
    };

    const handleSubmit = () => {
        console.log("Jo‘natiladigan ma’lumotlar:", {
            variants,
            correctIndex: selectedIndex,
        });
    };

    return (
        <div style={{ width: width || "460px" }} className={styles.container}>
            <div className={styles.wrapper}>
                {variants.map((variant, index) => (
                    <div
                        className={`${styles.card} ${selectedIndex === index ? styles.active : ""
                            }`}
                        key={index}
                    >
                        <h4 className={styles.title}>Вариант № {index + 1}</h4>
                        <button className={styles.close} onClick={() => { }}>×</button>

                        <p className={styles.answerLabel}>Текст ответа</p>
                        <textarea
                            className={styles.textarea}
                            placeholder="Введите текст"
                            value={variant.text}
                            onChange={(e) => handleTextChange(index, e.target.value)}
                        />

                        <div className={styles.correctAnswer}>

                            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <input
                                    type="checkbox"
                                    checked={selectedIndex === index}
                                    onChange={() => handleCheckboxChange(index)}
                                    style={{ marginRight: "8px" }}
                                />
                                <div>
                                    <p className={styles.correctAnswerTitle}>Правильный ответ</p>
                                    <p className={styles.text}>Можно выбрать только один вариант</p>
                                </div>
                            </label>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.button}>
                <Button onClick={handleSubmit} text={"Готово"} />
            </div>
        </div>
    );
};

export default CorrectAnsweTextarea;
