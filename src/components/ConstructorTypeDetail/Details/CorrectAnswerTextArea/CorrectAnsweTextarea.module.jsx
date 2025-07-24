import React, { useEffect, useState } from "react";
import Button from "../../../Detals/SubmitButton/button";
import { ReactComponent as AddIcon } from "../../../../assets/icon/add.svg"
import SwitchButton from "../../../Detals/SwitchBtn/switchBtn";
import styles from "./correctAnsweTextarea.module.css";

const CorrectAnsweTextarea = ({ coloredButton, count = 3, setCount, initialCharacters = [], width, height, contentHeight, setValue }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [variants, setVariants] = useState([]);
    const [onColoredButton, setOnColoredButton] = useState(false)

    useEffect(() => {
        setVariants(prevVariants => {
            let updated = [...prevVariants];

            if (count > prevVariants.length) {
                const diff = count - prevVariants.length;
                for (let i = 0; i < diff; i++) {
                    const newItem = {
                        id: crypto.randomUUID(),
                        text: "",
                    };

                    if (initialCharacters && initialCharacters.length > 0) {
                        newItem.character = initialCharacters[updated.length];
                    }
                    updated.push(newItem);
                }
            }
            else if (count < prevVariants.length) {
                updated = updated.slice(0, count);
            }

            return updated;
        });
    }, [count, initialCharacters.length]);




    const handleTextChange = (index, value) => {
        const updated = [...variants];
        updated[index].text = value;
        setVariants(updated);
    };

    const handleCheckboxChange = (index) => {
        setSelectedIndex(index === selectedIndex ? null : index);
    };

    const handleDelete = (index) => {
        const updated = [...variants];
        updated.splice(index, 1);
        setVariants(updated);

        if (selectedIndex === index) {
            setSelectedIndex(null);
        } else if (selectedIndex > index) {
            setSelectedIndex(selectedIndex - 1);
        }

        setCount(prev => Math.max(prev - 1, 0));
    };

    const handleAdd = () => {
    if (variants.length >= 6) return;

    const newItem = {
        id: crypto.randomUUID(),
        text: "",
    };

    if (initialCharacters && initialCharacters.length > variants.length) {
        newItem.character = initialCharacters[variants.length];
    }

    setVariants(prev => [...prev, newItem]);
    setCount(prev => Math.min(prev + 1, 6));
};


    const handleSubmit = () => {
        const result = variants.map((variant, idx) => ({
            ...variant,
            correct: idx === selectedIndex,
        }));

        const finalData = {
            coloredButton: onColoredButton,
            variants: result,
        };

        if (setValue) {
            setValue(finalData);
        }
    };



    return (
        <div style={{ width: width || "613px", height: height || "612px" }} className={styles.container}>
            <h3 className={styles.mainTitle}>Напишите текста ответов и выберите правильный ответ <span className="redText">*</span></h3>
            <div style={{ display: "flex", marginBottom: "15px" }}>
                <p className={styles.subtitle}>Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть.</p>
                <button onClick={handleAdd} className={styles.addButton}><AddIcon /> Добавить</button>
            </div>
            {
                coloredButton && <div className={styles.coloredButton}>
                    <p>Цветные кнопки</p>
                    <SwitchButton onClick={() => setOnColoredButton(!onColoredButton)} isRight={true} on={onColoredButton} />
                </div>
            }
            <div style={{ height: contentHeight || "423px" }} className={styles.wrapper}>
                {variants.map((variant, index) => (
                    <div
                        className={`${styles.card}`}
                        key={variant.id}
                    >
                        <h4 className={styles.title}>Вариант № {index + 1}</h4>
                        <button className={styles.close} onClick={() => handleDelete(index)}>×</button>

                        <p className={styles.answerLabel}>Текст ответа</p>
                        <textarea
                            className={styles.textarea}
                            placeholder="Введите текст"
                            value={variant.text}
                            onChange={(e) => handleTextChange(index, e.target.value)}
                        />

                        <div className={`${styles.correctAnswer} ${selectedIndex === index ? styles.active : ""}`}>
                            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <input className={styles.input}
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
