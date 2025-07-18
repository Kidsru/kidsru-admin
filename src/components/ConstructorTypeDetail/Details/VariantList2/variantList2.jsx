import { useEffect, useState } from "react";
import Button from "../../../Detals/SubmitButton/button";
import { ReactComponent as AddIcon } from "../../../../assets/icon/add.svg";
import styles from "./variantList2.module.css";

const VariantList2 = ({ count = 1, initialCharacters = [], width, contentWidth, mainTitle, subtitle, textareaTitle }) => {
    const [variants, setVariants] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null); 

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
        const updatedVariants = variants.map((variant, index) => ({
            ...variant,
            correct: index === selectedIndex,
        }));
        setVariants(updatedVariants);

        console.log("Yakuniy variantlar:", updatedVariants);
    };

    const handleRemoveVariant = (index) => {
        const updated = variants.filter((_, i) => i !== index);
        setVariants(updated);

        if (selectedIndex === index) {
            setSelectedIndex(null);
        } else if (selectedIndex > index) {
            setSelectedIndex(selectedIndex - 1);
        }
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

    const handleCheckboxChange = (index) => {
        setSelectedIndex(index === selectedIndex ? null : index);
    };

    return (
        <div style={{ width: width || "460px" }} className={styles.container}>
            <h3 className={styles.mainTitle}>
                {mainTitle || (
                    <>
                        Напишите текста реплик для персонажа <span>{initialCharacters[0]}</span>
                    </>
                )} <span className="redText">*</span>
            </h3>
            <div style={{ display: "flex", marginBottom: "15px", justifyContent: "space-between", alignItems: "center" }}>
                <p className={styles.subtitle}>{subtitle || "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."}</p>
                <button onClick={handleAdd} className={styles.addButton}><AddIcon /> Добавить</button>
            </div>

            <div style={{ width: contentWidth || "424px" }} className={styles.wrapper}>
                {variants.map((variant, index) => (
                    <div className={styles.card} key={index}>
                        <h4 className={styles.title}>Вариант № {index + 1}</h4>
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

                        <p className={styles.answerLabel}>{textareaTitle || "Текст ответа"}</p>
                        <textarea
                            className={styles.textarea}
                            placeholder="Введите текст"
                            value={variant.text}
                            onChange={(e) => handleTextChange(index, e.target.value)}
                        />

                        <div className={`${styles.correctAnswer} ${selectedIndex === index ? styles.active : ""}`}>
                            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <input
                                    className={styles.input}
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

export default VariantList2;
