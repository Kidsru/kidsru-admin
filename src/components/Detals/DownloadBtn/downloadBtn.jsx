import styles from './downloadBtn.module.css'
import { ReactComponent as DownloadIcon } from '../../../assets/icon/download2.svg';

const DownloadBtn = () => {
    return (
        <button className={styles.button}>Скачать <DownloadIcon />
        </button>
    )
}

export default DownloadBtn