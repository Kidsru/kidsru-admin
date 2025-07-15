import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { types as staticTypes } from "./data";

function Main() {
  const [type, setType] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentType = staticTypes.find((t) => t.id === id);
    if (currentType) {
      setType(currentType);
    } else {
      navigate("/constructor");
    }
  }, [id, navigate]);

  useTitle(type?.title);

  return (
    <div>
      <h1>{type?.name}</h1>
      <br />
      <p>{type?.id}</p>
    </div>
  );
}

export default Main;
