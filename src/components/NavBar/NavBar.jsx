import { BsBellFill } from "react-icons/bs";
import styles from "./NavBar.module.css"
import { FiSearch } from "react-icons/fi";
import img from "../../assets/img/user.jpg"
import { IoIosArrowDown } from "react-icons/io";


function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={`${styles.navbarItem} ${styles.leftItem}`}>
        <input type="text" placeholder="Поиск" />
        <FiSearch className={styles.searchIcon} />
      </div>
      <div className={styles.navbarItem}>
        <BsBellFill style={{cursor:"pointer"}} />
        <div className={styles.imgWrapper}>
          <img src={img} alt="user-img" />
        </div>
        <IoIosArrowDown style={{cursor:"pointer"}} />
      </div>
    </div>
  )
}

export default NavBar