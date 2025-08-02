import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import { ReactComponent as AuthIcon } from "../../assets/icon/auth_img.svg";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import styles from "./auth.module.css";
import { endpoints } from "../../services/api.js";
import { apiConnector } from "../../services/apiconnector";

function Auth() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  const clearUsername = () => setUsername("");

  const normalizePhone = (value) => value.replace(/\D/g, "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const normalizedPhone = normalizePhone(username);

    try {
      const response = await apiConnector("POST", endpoints.LOGIN_API, {
        phone: normalizedPhone,
        password: password,
      });

      const data = response.data;
      if (response.status === 201 && data?.access_token) {
        document.cookie = `access_token=${data.access_token}; path=/; max-age=2592000; secure; samesite=strict`;
        localStorage.setItem("ADMIN_ID", data.id);

        navigate("/dashboard");
      } else {
        setError("Ошибка авторизации");
      }
    } catch (err) {
      if (err?.response?.status === 404) {
        setError("Такой пользователь не найден");
      } else if (err?.response?.status === 409) {
        setError("Неверный пароль");
      } else {
        setError("Сервер недоступен");
      }
    } finally {
      setLoading(false);
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
                <IMaskInput
                  mask="+{998} (00) 000 00 00"
                  value={username}
                  onAccept={(value) => setUsername(value)}
                  disabled={loading}
                  placeholder="+998 (__) ___ __ __"
                  className={styles.input}
                  required
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

            <p className={styles.error_text}>{error || "\u00A0"}</p>

            <div className={`${styles.form_row} ${styles.form_submit_wrapper}`}>
              <button
                className={styles.form_submit}
                type="submit"
                disabled={loading}
              >
                {loading ? "Загрузка..." : "Войти"}
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
