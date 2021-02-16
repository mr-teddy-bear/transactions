import React from "react";
import styles from "./styles.module.css";
import { ReactComponent as Settings } from "../../../assets/img/settings.svg";
import { ReactComponent as Calendar } from "../../../assets/img/calendar.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Events() {
  const events = useSelector((state) => state.transactions.events);
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <span className={styles.titleText}>События</span>
        <Settings className={styles.settingsIcon} />
      </div>
      <div className={styles.actionContainer}>
        <div className={styles.allActions}>
          {events.map((ev) => {
            return (
              <div key={ev.id} className={styles.action}>
                <Calendar className={styles.calendarIcon} />
                <div className={styles.actionDate}>{ev.date}</div>
                <div className={styles.actionInfo}>
                  <Link className={styles.actionLink} to="/events">
                    {ev.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Link className={styles.allEventsLink} to="/events">
          Все события
        </Link>
      </div>
    </div>
  );
}

export default Events;
