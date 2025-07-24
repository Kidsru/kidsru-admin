import { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiArrowUpRightBold } from "react-icons/pi";
import styles from "./Actions.module.css";
import img from "../../../assets/img/warning.png"

function Actions({ onView, onDelete, onEdit, hideView }) {
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = () => {
    onDelete();
    setOpenModal(false);
  }

  return (
    <>
      <div className={styles.wrapper}>
        {!hideView && <button onClick={onView} className={`${styles.ActionsBtn} ${styles.arrow}`}><PiArrowUpRightBold></PiArrowUpRightBold></button>}
        <button onClick={onEdit} className={`${styles.ActionsBtn} ${styles.edit}`}><MdOutlineEdit /></button>
        <button onClick={() => setOpenModal(true)} className={`${styles.ActionsBtn} ${styles.delete}`}><RiDeleteBin6Line /></button>
      </div>
      {
        openModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div>
                <div className={styles.imgWrapper}>
                  <img src={img} alt="warning img" />
                </div>
                <h3 className={styles.modalTitle}>Вы уверены?</h3>
                <p className={styles.modalText}>Вы уверены, что хотите удалить этого пользователя?</p>
              </div>
              <div className={styles.modalButtons}>
                <button onClick={handleDelete} className={styles.deleteButton}>удалить</button>
                <button onClick={() => setOpenModal(false)} className={styles.cancelButton}>Выход</button>
              </div>
              <div onClick={() => setOpenModal(false)} className={styles.cancel}>X</div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Actions;
