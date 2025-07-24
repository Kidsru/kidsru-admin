import { useState } from "react";
import GetGame from "../ConstructorTypeDetail/getGame";
function Testing() {
  const [get, setGet] = useState(true);
  const [data, setData] = useState([]);

  console.log(data);
  

  return (
    <div>
      <GetGame get={get} type="game_1" setGet={setGet} setData={setData} />
    </div>
  );
}

export default Testing;