import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { ReactComponent as CloseIcon } from "../../../assets/img/close.svg";

function EventDetails({ closeDescription, eventId }) {
  const events = useSelector((state) => state.transactions.events);
  const event = events.filter((item) => item.id === eventId)[0];

  return (
    <div className={styles.details}>
      <div onClick={closeDescription} className={styles.underPopUp}></div>
      <div className={styles.popUp}>
        <CloseIcon onClick={closeDescription} className={styles.close} />
        <h2 className={styles.title}>{event.title}</h2>
        <div className={styles.topic}>
          <div className={styles.text}>{event.descr}</div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
