import "./CheckBoxForCard.css";
import { useReducer, useState } from "react";

function reducer(state, action) {
  console.log(action.check);
  switch (action.check) {
    case "Oneclick":
      return {
        two: !state.two,
        one: !state.one,
      };
    case "Twoclick":
      return {
        one: !state.one,
        two: !state.two,
      };
    default:
      return state;
  }
}

function CheckBoxForCard() {
  
//main function for props---------------------------------


  const [state, dispatch] = useReducer(reducer, { one: false, two: true });
  return (
    <div className="CheckBoxForCard">
      <div className="wrpCheckBox">
        <input
          type="checkbox"
          name="checkboxCard"
          id="1"
          onChange={()=>dispatch({ check: "Oneclick" })}
          checked={state.one}
        />
        <div className="wrpText">
          <h5>Персонаж 1</h5>
          <p>Слева направо</p>
        </div>
      </div>
      <div className="wrpCheckBox">
        <input
          type="checkbox"
          name="checkboxCard"
          id="2"
          onChange={()=>dispatch({ check: "Twoclick" })}
          checked={state.two}
        />
        <div className="wrpText">
          <h5>Персонаж 2</h5>
          <p>Слева направо</p>
        </div>
      </div>
    </div>
  );
}

export default CheckBoxForCard;
