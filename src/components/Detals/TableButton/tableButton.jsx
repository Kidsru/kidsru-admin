import styles from "./tableButton.module.css"
import { ReactComponent as ArrowIcon } from '../../../assets/icon/arrow.svg';

const TableButton = ({ text }) => {
    return (
        <button className={styles.button}>
            {text} <ArrowIcon />
        </button>
    )
}

export default TableButton