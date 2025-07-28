import Calendar from "../Detals/Calendar/main";
import { useState } from "react";

function Index() {
  const [text, setText] = useState("");

const speak = () => {
  const apiKey = "KlEuJdtC.mcROWHQS4m5IrBHeg7dTJPWKLqw9J0Qt";
  const formData = new FormData();
  formData.append("transcript", text);
  formData.append("language", "uz");
  formData.append("model", "gulnoza");

  fetch("https://back.aisha.group/api/v1/tts/post/", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "X-Channels": "stereo",
      "X-Quality": "64k",
      "X-Rate": "16000",
      "X-Format": "mp3",
    },
    body: formData,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("TTS API xatolik berdi.");
      }
      return res.json();
    })
    .then((data) => {
      if (!data.audio_path) {
        throw new Error("audio_path topilmadi.");
      }
      const audio = new Audio(data.audio_path);
      audio.play();
    })
    .catch((err) => {
      console.error("Xatolik:", err.message);
      alert("Audio yuklanmadi. Xatolik: " + err.message);
    });
};


  return (
    <div style={{ padding: "20px" }}>
      <h2>O'zbekcha matnni o'qitish</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Matnni bu yerga yozing..."
      ></textarea>
      <br />
      <button onClick={speak} style={{ marginTop: "10px", padding: "8px 16px" }}>
        O'qib ber
      </button>
    </div>
  );
}

export default Index;
