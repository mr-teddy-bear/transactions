import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { changeActiveLink } from "../../../store/transactions/actions";

function SquareMenu({ link }) {
  const dispatch = useDispatch();
  const activeLink = useSelector((state) => state.transactions.activeLink);
  return (
    <div
      onClick={() => dispatch(changeActiveLink(link.id))}
      className={[
        styles.squareContainer,
        activeLink === link.id ? styles.active : "",
      ].join(" ")}
    >
      <img className={[styles.squareIcon].join(" ")} src={link.imgSrc} alt="" />
      <span className={[styles.squareText].join(" ")}>{link.title}</span>
    </div>
  );
}

export default SquareMenu;
