import styles from "./index.module.css";
import Button from "../../SubmitButton/button.jsx";
import Card from "./Details/card/card.jsx";
import { ReactComponent as AddIcon } from "../../../../assets/icon/add.svg";
import { useState, useRef, useEffect } from "react";

function FastLoadImg({
  title,
  subtitle,
  content,
  textarea,
  textareaContent = [],
  checkbox,
  options,
  cardTitle,
  onImageChange,
  src = [],
  defaultCheck,
}) {
  const [cards, setCards] = useState(() => {
    const initial = options ? src : src.slice(0, 2);
    return initial.map((item, index) => ({
      src: item,
      fromProps: true,
      textareaContent: textareaContent[index] || null,
    }));
  });
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (defaultCheck && Number.isInteger(defaultCheck) && defaultCheck > 0) {
      setActiveIndex(defaultCheck - 1);
    }
  }, [defaultCheck]);

  const fileInputRef = useRef();
  const [dragActive, setDragActive] = useState(false);

  const defaultTextarea = {
    title: "Текст ответа",
    placeholder: "Текст ответа...",
    value: "",
  };

  const handleAddCard = () => {
    if (!options && cards.length >= 2) return;
    setCards((prev) => [
      ...prev,
      {
        src: null,
        fromProps: false,
        textareaContent: textarea ? { ...defaultTextarea } : null,
      },
    ]);
  };

  const handleRemoveCard = (index) => {
    setCards((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => setDragActive(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (!file) return;
    const validTypes = ["image/jpeg", "image/png"];
    const maxSize = 5 * 1024 * 1024;

    if (!validTypes.includes(file.type)) {
      alert("❌ Разрешены только изображения JPEG или PNG.");
      return;
    }

    if (file.size > maxSize) {
      alert("❌ Размер изображения не должен превышать 5 МБ.");
      return;
    }

    const url = URL.createObjectURL(file);
    setCards((prev) => [
      ...prev,
      {
        src: url,
        fromProps: false,
        textareaContent: textarea ? { ...defaultTextarea } : null,
      },
    ]);
  };

  const handleTextareaChange = (index, value) => {
    setCards((prev) => {
      const updated = [...prev];
      updated[index].textareaContent = {
        ...updated[index].textareaContent,
        value,
      };
      return updated;
    });
  };

  const isLimitReached = !options && cards.length >= 2;
  const shouldShowSubmit = options ? cards.length > 0 : cards.length > 1;

  return (
    <div
      className={styles.wrapper}
      style={{ width: `${content[0].wrapper.width}` }}
    >
      <div className={styles.title_wrapper}>
        <h4 className={styles.title}>
          {title} <span>*</span>
        </h4>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.content_wrapper}>
        <div className={styles.content_controls}>
          <button
            className={`${styles.control_file} ${
              dragActive ? styles.drag_active : ""
            } ${isLimitReached ? styles.no_active : ""}`}
            onClick={() => fileInputRef.current.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            disabled={isLimitReached}
          >
            <input
              type="file"
              accept="image/jpeg,image/png"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <p className={styles.control_file_title}>
              Перетащите файл или <span>выберите</span>
            </p>
            <p className={styles.control_file_subtitle}>
              Формат: .jpeg, .png / .mp4, .webM Макс. размер файла: 5 MB
            </p>
          </button>
          <button
            className={`${styles.control_add} ${
              isLimitReached ? styles.no_active : ""
            }`}
            onClick={handleAddCard}
            disabled={isLimitReached}
          >
            <AddIcon />
            <p>Добавить</p>
          </button>
        </div>

        <div
          className={styles.content_bar}
          style={{ height: `${content[0].content.height}` }}
        >
          <div className={styles.content_bar_item}>
            {cards.map((card, index) => (
              <Card
                key={index}
                src={card.src}
                textareaContent={card.textareaContent}
                width={content[0].img.width}
                card={content[0].card.width}
                checkbox={checkbox}
                title={
                  options
                    ? `Вариант №${index + 1}`
                    : cardTitle[index]?.title || `Вариант №${index + 1}`
                }
                textarea={textarea}
                onRemove={() => handleRemoveCard(index)}
                onTextareaChange={(value) => handleTextareaChange(index, value)}
                checked={activeIndex === index}
                onCheckboxChange={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {shouldShowSubmit && (
        <div className={styles.submit_wrapper}>
          <Button type="button" text="Готово" />
        </div>
      )}
    </div>
  );
}

export default FastLoadImg;