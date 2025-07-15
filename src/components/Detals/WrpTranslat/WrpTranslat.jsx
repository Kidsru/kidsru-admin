import { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import "./WrpTranslat.css"

function WrpTranslat({ id, index, onRemove, onChange }) {
  const [reverse, setReverse] = useState(false);
  const [rus, setRus] = useState("");
  const [uz, setUz] = useState("");

  const handleSwap = () => {
    setReverse(!reverse);
  };

  const handleInput = (lang, value) => {
    if (lang === "rus") setRus(value);
    else setUz(value);
    onChange(id, {
      word: lang === "rus" ? value : rus,
      translation: lang === "rus" ? uz : value
    });
  };

  return (
    <div className="wrpTranslat">
      <h3 className="dictionaryTitle">Слово #{index}</h3>
      <div className="wrpLangs">
        <div className="lang">
          <h4>{!reverse ? "РУССКИЙ" : "УЗБЕКСКИЙ"}</h4>
          <textarea
            placeholder={!reverse ? "Здравствуйте" : "Assalomu alaykum"}
            value={!reverse ? rus : uz}
            onChange={e => handleInput(!reverse ? "rus" : "uz", e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleSwap}>
          <LuArrowLeftRight />
        </button>
        <div className="lang">
          <h4>{!reverse ? "УЗБЕКСКИЙ" : "РУССКИЙ"}</h4>
          <textarea
            placeholder={!reverse ? "Assalomu alaykum" : "Здравствуйте"}
            value={!reverse ? uz : rus}
            onChange={e => handleInput(!reverse ? "uz" : "rus", e.target.value)}
          ></textarea>
        </div>
      </div>
      <button style={{cursor:"pointer"}} onClick={() => onRemove(id)}>
        <MdClose />
      </button>
    </div>
  );
}

export default WrpTranslat;