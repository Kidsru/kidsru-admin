import "./CheckboxForAnswer.css"
import { useState } from "react";
function CheckboxForAnswer() {
     const [check,setcheck]=useState(false);
    
          const handCheck=()=>{
            setcheck(!check)
          }
  return (
    <div>
      <div
        className={
          check ? " wrpCheckBoxAnswer checkGreen" : " wrpCheckBoxAnswer "
        }
      >
        <input type="checkbox" name="checkbox" id="0" onChange={handCheck} />
        <div>
          <h4>Правильный ответ</h4>
          <p>Можно выбрать только один вариант</p>
        </div>
      </div>
    </div>
  );
}

export default CheckboxForAnswer;
