import styles from "./saveButton.module.css"
import {ReactComponent as Arrow} from "../../../assets/icon/buttonArrow.svg"

const SaveButton = ({ text, hideIcon }) => {
    return (
        <button className={styles.button}>{text || "Создать"} {!hideIcon && <Arrow />}</button>
    )
}

export default SaveButton