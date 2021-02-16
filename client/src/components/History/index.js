import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "../common/Menu";
import Header from "../common/Header";
import styles from "./styles.module.css";
import { ReactComponent as Settings } from "../../assets/img/settings.svg";
import CheckIcon from "@material-ui/icons/Check";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import EventDetails from "../common/EventDescription";
import { changeActiveLink } from "../../store/transactions/actions";

function History() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveLink(2));
  });

  const events = useSelector((state) => state.transactions.events);
  let filtredEvents = [];
  const [filter, setFilter] = useState("all");
  const [openedDetailId, setOpenedDetailId] = useState(null);

  filter === "all"
    ? (filtredEvents = [...events])
    : (filtredEvents = events.filter((ev) => {
        return ev.status === filter;
      }));
  return (
    <div className={styles.main}>
      <Menu />
      {openedDetailId && (
        <EventDetails
          eventId={openedDetailId}
          closeDescription={() => setOpenedDetailId(null)}
        />
      )}
      <div className={styles.content}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.firstColumn}>
            <div className={styles.lastEvents}>
              <div className={styles.title}>
                <span className={styles.titleText}>События нашего банка</span>
                <Settings className={styles.settingsIcon} />
              </div>
              <div className={styles.filtredBtn}>
                <button
                  className={[
                    styles.eventBtn,
                    filter === "all" ? styles.active : "",
                  ].join(" ")}
                  onClick={() => setFilter("all")}
                >
                  Все
                </button>
                <button
                  className={[
                    styles.eventBtn,
                    filter === "new" ? styles.active : "",
                  ].join(" ")}
                  onClick={() => setFilter("new")}
                >
                  Новые
                </button>
                <button
                  className={[
                    styles.eventBtn,
                    filter === "old" ? styles.active : "",
                  ].join(" ")}
                  onClick={() => setFilter("old")}
                >
                  Прочитанные
                </button>
              </div>
              <div className={styles.events}>
                {filtredEvents.map((ev) => {
                  return (
                    <div
                      onClick={() => setOpenedDetailId(ev.id)}
                      key={ev.id}
                      className={styles.event}
                    >
                      <div className={styles.eventDate}>{ev.date}</div>
                      <div className={styles.eventInfo}>
                        <h3 className={styles.eventTitle}>{ev.title}</h3>
                        <h3
                          className={[
                            styles.eventStatus,
                            ev.status === "old" ? styles.old : styles.new,
                          ].join(" ")}
                        >
                          {ev.status === "old" ? (
                            <CheckIcon className={styles.statusIcon} />
                          ) : (
                            <FiberNewIcon className={styles.statusIcon} />
                          )}
                          {ev.status === "old" ? "Прочитано" : "Новое"}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
