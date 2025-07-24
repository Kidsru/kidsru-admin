import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../sidebar.module.css";
import { types as staticTypes } from "../../ConstructorTypeDetail/data";
import { useEncryptor } from "../../../hooks/useEncryptor";

function Index() {
  const { encryptId, decryptId } = useEncryptor();

  // const originalId = "?Hello World!";
  // const encryptedId = encryptId(originalId);
  // console.log("Asl ID:", originalId);
  // console.log("Shifrlangan ID:", encryptedId);

  // const decryptedId = decryptId(encryptedId);
  // console.log("Shifrdan ochilgan ID:", decryptedId);

  
  const [types, setTypes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setTypes(staticTypes);
  }, []);

  const getIsActive = (children) => {
    return children.some((child) =>
      location.pathname.includes(`/constructor/type/${child.type}`)
    );
  };

  return (
    <div className={styles.subList}>
      {types.map(({ children, name }) => {
        const isActive = getIsActive(children);

        return (
          <Link
            key={name}
            to={`/constructor/type/${children[0].type}`}
            className={`${styles.subItem} ${isActive ? styles.active : ""}`}
          >
            <span className={styles.dot}></span>
            <p>{name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Index;
