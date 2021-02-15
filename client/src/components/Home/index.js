import React from "react";
import Menu from "../common/Menu";
import Header from "../common/Header";
import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.content}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.firstColumn}></div>
          <div className={styles.secondColumn}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
