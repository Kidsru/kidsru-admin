import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AuthIcon } from "../../assets/icon/auth_img.svg";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import styles from "./auth.module.css";

function Auth() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const toggleVisibility = () => setVisible(!visible);
  const clearUsername = () => setUsername("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctUsername = "admin";
    const correctPassword = "12345678";

    if (username !== correctUsername) {
      setError("Такой пользователь не найден");
    } else if (password !== correctPassword) {
      setError("Неверный пароль");
    } else {
      setError("");
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_box}>
        <form className={styles.auth_form} onSubmit={handleSubmit}>
          <div className={styles.form_title_wrapper}>
            <h1 className={styles.form_title}>Авторизация</h1>
            <p className={styles.form_subtitle}>
              Пожалуйста заполните поля, чтобы войти в свой аккаунт
            </p>
          </div>
          <div className={styles.form_grid}>
            <div className={styles.form_row}>
              <label className={styles.input_wrapper}>
                <p className={styles.input_title}>Номер телефона</p>
                <input
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="+998 (99) 999-99-99"
                  className={styles.input}
                />
                <button
                  type="button"
                  onClick={clearUsername}
                  className={styles.icon_button}
                >
                  <MdOutlineCancel className={styles.icon} />
                </button>
              </label>
              <label className={styles.input_wrapper}>
                <p className={styles.input_title}>Пароль</p>
                <input
                  value={password}
                  name="password"
                  type={visible ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className={styles.input}
                />
                <button
                  type="button"
                  onClick={toggleVisibility}
                  className={styles.icon_button}
                >
                  {visible ? (
                    <IoEyeOutline className={styles.icon} />
                  ) : (
                    <FaRegEyeSlash className={styles.icon} />
                  )}
                </button>
              </label>
            </div>
            {error ? (
              <p className={styles.error_text}>{error}</p>
            ) : (
              <p className={styles.error_text}>&nbsp;</p>
            )}

            <div className={`${styles.form_row} ${styles.form_submit_wrapper}`}>
              <button className={styles.form_submit} type="submit">
                Войти
              </button>
            </div>
          </div>
        </form>
        <div className={styles.auth_icon_wrapper}>
          <AuthIcon className={styles.auth_icon} />
        </div>
      </div>
    </div>
  );
}

export default Auth;
