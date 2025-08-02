import { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/icon/buttonArrow2.svg";
import Type1_0 from "./TypeOne/type1_0";
import styles from "./question.module.css";
import Type1_1 from "./TypeOne/type1_1";
import Type1_2 from "./TypeOne/type1_2";
import Type1_3 from "./TypeOne/type1_3";
import Type1_4 from "./TypeOne/type1_4";
import Type1_5 from "./TypeOne/type1_5";
import Type2_0 from "./TypeTwoo/type2_0";
import Type2_1 from "./TypeTwoo/type2_1";
import Type2_2 from "./TypeTwoo/type2_2";
import Type2_3 from "./TypeTwoo/type2_3";
import Type2_4 from "./TypeTwoo/type2_4";
import Type3_0 from "./TypeThree/type3_0";
import Type3_1 from "./TypeThree/type3_1";
import Type3_2 from "./TypeThree/type3_2";
import Type4_0 from "./TypeFour/type4_0";
import Type5_0 from "./TypeFive/type5_0";

const Question = ({
  test,
  isMainBlock,
  question,
  number,
  type,
  img,
  setType3Questions,
  mainBlockIndex,
  variantIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [characterCount, setCharacterCount] = useState(1);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {type === "3" && mainBlockIndex && variantIndex
            ? `Вопрос №${mainBlockIndex}.${variantIndex}`
            : (type !== "1_2")
              ? (isMainBlock ? "Основной блок" : `Вопрос №${question + 1}`)
              : `Слова 1-${number}`}
        </h2>
        <button
          onClick={toggleAccordion}
          className={isOpen ? styles.rotate : ""}
        >
          <Arrow />
        </button>
      </div>

      {isOpen && (
        <div className={styles.content}>
          {type === "1" && <Type1_0 />}
          {type === "1_1" && <Type1_1 />}
          {type === "1_2" && <Type1_2 number={number} />}
          {type === "1_3" && <Type1_3 isMainBlock={isMainBlock} />}
          {type === "1_4" && <Type1_4 />}
          {type === "1_5" && <Type1_5 characterCount={characterCount} setCharacterCount={setCharacterCount} />}
          {type === "2" && <Type2_0 characterCount={characterCount} setCharacterCount={setCharacterCount} question={question} number={number} />}
          {type === "2_1" && <Type2_1 characterCount={characterCount} setCharacterCount={setCharacterCount} question={question} number={number} />}
          {type === "2_2" && <Type2_2 characterCount={characterCount} setCharacterCount={setCharacterCount} question={question} number={number} />}
          {type === "2_3" && <Type2_3 characterCount={characterCount} setCharacterCount={setCharacterCount} />}
          {type === "2_4" && <Type2_4 characterCount={characterCount} setCharacterCount={setCharacterCount} />}
          {type === "3" && <Type3_0 characterCount={characterCount} setCharacterCount={setCharacterCount} question={question} number={number} isMainBlock={isMainBlock} setType3Questions={setType3Questions} type={type} />}
          {type === "3_1" && <Type3_1 characterCount={characterCount} setCharacterCount={setCharacterCount} isMainBlock={isMainBlock} />}
          {type === "3_2" && <Type3_2 characterCount={characterCount} setCharacterCount={setCharacterCount} isMainBlock={isMainBlock} />}
          {type === "4" && <Type4_0 characterCount={characterCount} setCharacterCount={setCharacterCount} />}
          {type === "5" && <Type5_0 characterCount={characterCount} setCharacterCount={setCharacterCount} />}
        </div>
      )}
    </div>
  );
};

export default Question;