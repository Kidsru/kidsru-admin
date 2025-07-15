import styles from "./tableButton.module.css"

const TableButton = ({ text }) => {
    return (
        <button className={styles.button}>
            {text} <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.914062 0.75L4.41406 4L0.914062 7.25" stroke="#838383" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    )
}

export default TableButton