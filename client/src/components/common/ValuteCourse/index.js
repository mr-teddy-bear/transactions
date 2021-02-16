import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Settings } from "../../../assets/img/settings.svg";
import styles from "./styles.module.css";

function ValuteCourse() {
  const courses = useSelector((state) => state.transactions.courses);
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <span className={styles.titleText}>Курсы валют Альфа-Банка</span>
        <Settings className={styles.settingsIcon} />
      </div>
      <div className={styles.courses}>
        {courses.map((course) => {
          return (
            <div key={course.title} className={styles.course}>
              <div className={styles.valute}>
                <img className={styles.valuteImg} src={course.img} alt="" />
                <h2 className={styles.valuteTitle}>{course.title}</h2>
              </div>
              <div className={styles.courseValue}>{course.buy}</div>
              <div className={styles.courseValue}>{course.sell}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ValuteCourse;
