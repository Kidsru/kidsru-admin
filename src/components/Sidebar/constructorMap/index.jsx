import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../sidebar.module.css";
import { types as staticTypes } from "../../ConstructorTypeDetail/data";

function Index() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setTypes(staticTypes);
  }, [staticTypes]);

  return (
    <div className={styles.subList}>
      {types.map(({ id, name }) => (
        <NavLink
          key={id}
          to={`/constructor/type/${id}`}
          className={({ isActive }) =>
            `${styles.subItem} ${isActive ? styles.active : ""}`
          }
        >
          <span className={styles.dot}></span>
          <p>{name}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default Index;
