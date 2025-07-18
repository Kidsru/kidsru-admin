import React, { useEffect, useState } from "react";
import styles from "./variantList.module.css";
import Button from "../../../Detals/SubmitButton/button";

const VariantList = ({ count = 1, initialCharacters = [], width, mainTitle, subtitle }) => {

    const [variants, setVariants] = useState([]);

    useEffect(() => {
        setVariants(
            Array.from({ length: count }, (_, i) => ({
                character: initialCharacters[i] || 1,
                text: "",
            }))
        );
    }, [count, initialCharacters]);

    const handleCharacterChange = (index, value) => {
        const updated = [...variants];
        updated[index].character = value;
        setVariants(updated);
    };

    const handleTextChange = (index, value) => {
        const updated = [...variants];
        updated[index].text = value;
        setVariants(updated);
    };

    const handleSubmit = () => {
        console.log("Jo‘natiladigan ma’lumotlar:", variants);
    };

    return (
        <div style={{ width: width || "460px" }} className={styles.container}>
            <h3 className={styles.mainTitle}>
                {mainTitle || (
                    <>
                        Напишите текста реплик для персонажа <span>{initialCharacters[0]}</span>
                    </>
                )}
            </h3>
            <p className={styles.subtitle}>{subtitle || "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."}</p>
            <div className={styles.wrapper}>
                {variants.map((variant, index) => (
                    <div className={styles.card} key={index}>
                        <h4 className={styles.title}>Вариант № {index + 1}</h4>
                        <button className={styles.close} onClick={() => { }}>×</button>
                        <p className={styles.question}>Реплики какого персонажа?</p>
                        <div className={styles.options}>
                            <label className={styles.option}>
                                <div>
                                    <input
                                        type="checkbox"
                                        name={`character-${index}`}
                                        checked={variant.character === 1}
                                        onChange={() => handleCharacterChange(index, 1)}
                                    />
                                </div>
                                <div>
                                    <p>Персонаж 1</p>
                                    <span>Слева направо</span>
                                </div>
                            </label>
                            <label className={styles.option}>
                                <div>
                                    <input
                                        type="checkbox"
                                        name={`character-${index}`}
                                        checked={variant.character === 2}
                                        onChange={() => handleCharacterChange(index, 2)}
                                    />
                                </div>
                                <div>
                                    <p>Персонаж 2</p>
                                    <span>Справа налево</span>
                                </div>
                            </label>
                        </div>
                        <p className={styles.answerLabel}>Текст ответа</p>
                        <textarea
                            className={styles.textarea}
                            placeholder="Введите текст"
                            value={variant.text}
                            onChange={(e) => handleTextChange(index, e.target.value)}
                        ></textarea>
                    </div>
                ))}

            </div>
            <div className={styles.button}>
                <Button onClick={handleSubmit} text={"Готово"} />
            </div>
        </div>
    );
};

export default VariantList;
