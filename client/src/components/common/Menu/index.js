import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { letter } from "../../../assets";

import SquareMenu from "../SquareMenu";

function Menu() {
  const links = useSelector((state) => state.transactions.links);
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={letter} alt="" />
      </div>

      {links.map((link) => {
        return (
          <Link key={link.id} className={styles.link} to={link.to}>
            <SquareMenu link={link} />
          </Link>
        );
      })}
    </div>
  );
}

export default Menu;
