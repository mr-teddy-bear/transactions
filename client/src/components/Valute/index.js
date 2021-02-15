import React from "react";
import Menu from "../common/Menu";
import Header from "../common/Header";

import styles from "./styles.module.css";

function Valute() {
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.content}>
        <Header />
      </div>
    </div>
  );
}

export default Valute;
