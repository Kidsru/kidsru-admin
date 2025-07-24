import { useState } from "react";
import Button from "../../../Detals/SubmitButton/button";
import styles from "./textarea.module.css";

const Textarea = ({ width, mainTitle, title, subtitle, value, height, onClick, setValue }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [text, setText] = useState(value || "");

    const handleClick = () => {
        setIsDisabled(true);
        if (setValue) setValue(text); 
        if (onClick) onClick();
    };

    return (
        <div className={styles.wrapper} style={{ width: width || "551px", padding: "24px" }}>
            <h4 className={styles.mainTitle}>{mainTitle} <span className="redText">*</span></h4>
            <p className={styles.subtitle}>{subtitle}</p>
            <div>
                <h4 className={styles.title}>{title}</h4>
                <textarea
                    style={{ height: height || "86px" }}
                    className={styles.textarea}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <div style={{ textAlign: "right" }}>
                    <Button
                        text={"Готово"}
                        isDisabled={isDisabled}
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default Textarea;
