import React from 'react'
import Textarea from '../../Details/Textarea/textarea';
import VariantList2 from '../../Details/VariantList2/variantList2';
import SaveButton from '../../../Detals/SaveButton/saveButton';
import styles from "../question.module.css";

const Type3_1 = ({ characterCount, setCharacterCount, isMainBlock }) => {
  return (
    <div>
      <div>
        {isMainBlock ? (
          <div className={styles.flex}>
            <div
              style={{ height: "162px" }}
              className={styles.questionCountWrapper}
            >
              <h3 className={styles.questionCountTitle}>
                Сколько вариантов? <span className="redText">*</span>
              </h3>
              <div
                style={{ width: "464px" }}
                className={styles.questionCount}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <button
                    onClick={() => {
                      setCharacterCount(item);
                    }}
                    key={item}
                    className={
                      characterCount === item ? styles.active : ""
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <Textarea
              width={"504px"}
              height={"83px"}
              mainTitle={"Загрузите озвучку и текст вопроса / действия"}
              subtitle={
                "Пожалуйста, проверьте правильность написания слов и знаки препинания, если они есть."
              }
              title={"Текст вопроса / действия"}
              value={"Перетащите цвета на картинки"}
            />
          </div>
        ) : (
          Array.from({ length: 2 }).map((_, index) => (
            <React.Fragment key={`${index}-${characterCount}`}>
              <VariantList2
                mainTitle={`Напишите текста ответов реплики ${index + 1
                  } для персонажей и выберите правильный ответ *`}
                textareaTitle="Текст реплик"
                width="1039px"
                contentWidth="1000px"
                count={characterCount}
                initialCharacters={Array(characterCount).fill(2)}
              />
            </React.Fragment>
          ))
        )}
      </div>
      <div className={styles.saveButton}>
        <SaveButton text={"Сохранить"} hideIcon={true} />
      </div>
    </div>
  )
}

export default Type3_1