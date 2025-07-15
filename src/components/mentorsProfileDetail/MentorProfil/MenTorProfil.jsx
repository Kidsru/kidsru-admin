import styles from "./MentorProfil.module.css"

function MenTorProfil({ img, name, day, week, month }) {
  return (
    <div className={styles.MenTorProfil}>
      <img src={img ? img : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"} alt="" />
      <h1 className={styles.name}>{name ? name : "User"}</h1>
      <div className={styles.wrpDayStatus}>
        <div className={styles.box}><span className={styles.title}>В день</span> <h3>{day ? day : 0}</h3> </div>
        <div className={styles.box}><span className={styles.title}>В неделю</span> <h3>{week ? week : 0}</h3> </div>
        <div className={styles.box}><span className={styles.title}>В месяц</span> <h3>{month ? month : 0}</h3> </div>
      </div>
    </div>
  )
}

export default MenTorProfil