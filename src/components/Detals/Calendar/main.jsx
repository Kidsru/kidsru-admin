import Index_1 from "./details/index_1/index";
import Index_2 from "./details/index_2/index";
import styles from "./main.module.css";

function main({active, activeDates}) {
  return (
    <div className={styles.wrapper}>
      <Index_1 active={active} />
      <Index_2 weekStatus={activeDates} />
    </div>
  );
}

export default main;