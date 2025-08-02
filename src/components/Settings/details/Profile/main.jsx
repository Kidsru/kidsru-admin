import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";
import Button from "../../../Detals/SubmitButton/button.jsx";
import Input from "../../details/Input/input.jsx";
import FastLoadImg from "../../../Detals/LoadMedia/index1/index.jsx"; // FastLoadImg ni to'g'ri yo'ldan chaqiring
import { endpoints } from "../../../../services/api.js";
import { apiConnector } from "../../../../services/apiconnector";

// 🍪 Cookie dan token olish funksiyasi
function getAccessTokenFromCookie() {
  const name = "access_token=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(name)) {
      return cookie.substring(name.length);
    }
  }

  return null;
}

function Main() {
  const navigate = useNavigate();
  const token = getAccessTokenFromCookie();

  const [profileImage, setProfileImage] = useState(null); // API ga yuboriladigan rasm
  const [uploadedImg, setUploadedImg] = useState(null); // Frontendda ko'rsatiladigan rasm

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  // 🖼️ Rasm yuklanganda
  const handleImageChange = (result) => {
    console.log(
      "✅ Qaytgan rasm:",
      endpoints.GET_MEDIA_UPLOADS + result.filename
    );
    setUploadedImg(endpoints.GET_MEDIA_UPLOADS + result.filename);
    setProfileImage(result);
  };

  // ✏️ Inputlar uchun handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit funksiyasi
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, phone, oldPassword, password, confirmPassword } =
      formData;

    if (
      !fullName.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    if (!profileImage?.url) {
      alert("Пожалуйста, загрузите изображение профиля!");
      return;
    }

    try {
      // 👤 Profil ma’lumotlarini yuborish
      await apiConnector(
        "PUT",
        endpoints.ADMIN_EDIT,
        {
          full_name: fullName,
          phone: phone,
          avatar: endpoints.GET_MEDIA_UPLOADS + profileImage.filename,
        },
        {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      );

      // 🔐 Parolni yangilash
      await apiConnector(
        "PUT",
        endpoints.ADMIN_UPDATE_PASSWORD,
        {
          old_password: oldPassword,
          password: password,
        },
        {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      );

      alert("✅ Ma'lumotlar muvaffaqiyatli yangilandi!");
    } catch (error) {
      alert("❌ Xatolik yuz berdi: " + error.message);
    }
  };

  // 📦 Input maydonlari
  const inputs = [
    {
      name: "fullName",
      text: "Имя и Фамилия",
      type: "text",
      placeholder: "Введите Имя и Фамилию",
    },
    {
      name: "phone",
      text: "Номер телефона",
      type: "number",
      placeholder: "Введите номер телефона",
    },
    {
      name: "oldPassword",
      text: "Старый пароль",
      type: "password",
      placeholder: "∗∗∗∗∗∗∗∗",
    },
    {
      name: "password",
      text: "Пароль",
      type: "password",
      placeholder: "∗∗∗∗∗∗∗∗",
    },
    {
      name: "confirmPassword",
      text: "Повторите пароль",
      type: "password",
      placeholder: "∗∗∗∗∗∗∗∗",
    },
  ];

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_items}>
        <div className={styles.form_img_wrapper}>
          <FastLoadImg
            key={uploadedImg}
            onImageChange={handleImageChange}
            src={uploadedImg}
            size={{ wrapper: "466px", image: "280px", gap: "18.5px" }}
            title={"Загрузите картинку или анимацию"}
            subtitle={
              "Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ."
            }
          />
        </div>
        <div className={styles.form_input_wrapper}>
          {inputs.map((input) => (
            <Input
              key={input.name}
              text={input.text}
              type={input.type}
              plesholder={input.placeholder}
              value={formData[input.name]}
              onChange={handleChange}
              name={input.name}
            />
          ))}
        </div>
      </div>
      <div className={styles.submit_wrapper}>
        <Button text="Сохранить" type="submit" />
      </div>
    </form>
  );
}

export default Main;
