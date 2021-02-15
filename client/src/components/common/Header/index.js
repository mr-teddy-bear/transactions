import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import { letter } from "../../../assets";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Header() {
  const activeLink = useSelector((state) => state.transactions.activeLink);
  const title = useSelector(
    (state) => state.transactions.links[activeLink - 1].title
  );
  const user = useSelector((state) => state.transactions.user);
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.rightSide}>
          <div className={styles.callBlock}>
            <PhoneIcon style={{ fontSize: 35, color: "#fff" }} />
            <span className={styles.phoneNumber}>7464</span>
          </div>

          <div className={styles.user}>
            <img className={styles.logo} src={letter} alt="" />
            <div className={styles.userInfo}>
              <span className={styles.userName}>{user.name}</span>
              <h3 className={styles.userPosition}>{user.position}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
