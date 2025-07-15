import "./translationsHistory.css";
import { useState } from "react";
import WrpTranslat from "../WrpTranslat/WrpTranslat";
import MentorBtn from "../MentorBtn/MentorBtn";
import Button from "../SubmitButton/button";

function TranslationsHistory() {
  const [cards, setCards] = useState([{ id: Date.now() }]);

  const handleAdd = () => {
    setCards(prev => [...prev, { id: Date.now() }]);
  };

  const handleRemove = (id) => {
    setCards(prev => prev.filter(card => card.id !== id));
  };

  const handleChange = (id, data) => {
    setCards(prev => prev.map(card => (card.id === id ? { ...card, ...data } : card)));
  };

  const handleSubmit = () => {
    const formatted = cards.map(card => ({
      word: card.word || "",
      translation: card.translation || ""
    }));
    console.log("Sending to backend:", formatted);
    // axios.post('/api/words', formatted)
  };

  return (
    <div className="TranslationsHistory">
      <div style={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
        <h3>
          Напишите слова и их перевод <span>*</span>
        </h3>
        <MentorBtn handleClick={handleAdd} text={"Добавить"}></MentorBtn>
      </div>
      <div className="overFlow">
        {cards.map((item, index) => (
          <WrpTranslat
            key={item.id}
            id={item.id}
            index={index + 1}
            onRemove={handleRemove}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="wrpBtn">
        <Button onClick={handleSubmit} text={"Готово"} />
      </div>
    </div>
  );
}

export default TranslationsHistory;