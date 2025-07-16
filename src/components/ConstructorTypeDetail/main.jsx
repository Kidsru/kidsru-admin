import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { types as staticTypes } from "./data";
import MainComponent from "./Details/mainCompnent/mainComponent";

function Main() {
  const [type, setType] = useState(null);
  const [questionsNumber, setQuestionsNumber] = useState(1);
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
      <MainComponent setQuestionsNumber={setQuestionsNumber} game={type} types={type?.children} />
    </div>
  );
}

export default Main;
