import React, { useEffect, useState } from "react";
import Button from "../../../Detals/SubmitButton/button";
import { ReactComponent as AddIcon } from "../../../../assets/icon/add.svg";
import styles from "./variantList.module.css";

const VariantList = ({ count = 1, initialCharacters = [], width, height, contentWidth, mainTitle, subtitle, textareaTitle, typeFive, setValue }) => {

    const [variants, setVariants] = useState([]);

    useEffect(() => {
        setVariants(
            Array.from({ length: count }, (_, i) => ({
                character: initialCharacters[i] || 1,
                text: "",
            }))
        );
    }, []);

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
        if (typeFive) {
            const formatted = variants.map(variant => {
                return {
                    [variant.character === 1 ? "Левый ряд" : "Правый ряд"]: variant.text
                };
            });
            if (setValue) setValue(formatted);
        } else {
            if (setValue) setValue(variants);
        }
    };



    const handleRemoveVariant = (index) => {
        const updated = variants.filter((_, i) => i !== index);
        setVariants(updated);
    };

    const handleAdd = () => {
        if (variants.length >= 6) return;

        setVariants(prev => [
            ...prev,
            {
                character: 1,
                text: "",
            },
        ]);
    };

    return (
        <div style={{ width: width || "460px" }} className={styles.container}>
            <h3 className={styles.mainTitle}>
                {mainTitle || (
                    <>
                        Напишите текста реплик для персонажа <span>{initialCharacters[0]}</span>
                    </>
                )} <p style={{ display: "inline-block" }} className="redText">*</p>
            </h3>
            <div style={{ display: "flex", marginBottom: "15px", justifyContent: "space-between", alignItems: "center" }}>
                <p className={styles.subtitle}>{subtitle || "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."}</p>
                <button onClick={handleAdd} className={styles.addButton}><AddIcon /> Добавить</button>
            </div>
            <div style={{ width: contentWidth || "424px" }} className={styles.wrapper}>
                {variants.map((variant, index) => (
                    <div className={styles.card} key={index}>
                        <h4 className={styles.title}>{typeFive ? "Пара слов" : "Вариант"} № {index + 1}</h4>
                        <button className={styles.close} onClick={() => handleRemoveVariant(index)}>×</button>
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
                                    {
                                        !typeFive ? <><p>Персонаж 1</p>
                                            <span>Слева направо</span></> : <p>Левый ряд</p>
                                    }
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
                                    {
                                        !typeFive ? <><p>Персонаж 2</p>
                                            <span>Справа налево</span></> : <p>Правый ряд</p>
                                    }
                                </div>
                            </label>
                        </div>
                        <p className={styles.answerLabel}>{textareaTitle || "Текст ответа"}</p>
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
