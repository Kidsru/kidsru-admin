import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";
import Button from "../../../Detals/SubmitButton/button.jsx";
import Input from "../../details/Input/input.jsx";
import LoadImg from "../../../Detals/LoadMedia/index1/index.jsx";
import Avatar from "../../../../assets/img/user.jpg";

function Main() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, phone, password, confirmPassword } = formData;

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

    if (!profileImage || !profileImage.file) {
      alert("Пожалуйста, загрузите изображение профиля!");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", fullName);
    formDataToSend.append("phone", phone);
    formDataToSend.append("password", password);
    formDataToSend.append("confirmPassword", confirmPassword);
    formDataToSend.append("profileImage", profileImage.file);

    try {
      const response = await fetch("/backand-api", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Произошла ошибка сервера");
      }

      const data = await response.json();
      alert("Успешно отправлено!");
    } catch (error) {
      alert("Ошибка: " + error.message);
    }
  };

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
          <LoadImg onImageChange={setProfileImage} src={Avatar} />
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
