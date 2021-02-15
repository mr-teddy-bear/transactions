import React, { useState } from "react";
import Menu from "../common/Menu";
import Header from "../common/Header";
import { ReactComponent as Settings } from "../../assets/img/settings.svg";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Home() {
  const accounts = useSelector((state) => state.transactions.accounts);
  const operations = useSelector((state) => state.transactions.operations);
  let filtredOperations = [];
  const [filter, setFilter] = useState("all");

  filter === "all"
    ? (filtredOperations = [...operations])
    : (filtredOperations = operations.filter((operation) => {
        return operation.type === filter;
      }));
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.content}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.firstColumn}>
            <div className={styles.myAccounts}>
              <div className={styles.title}>
                <span className={styles.titleText}>Мои счета</span>
                <Settings className={styles.settingsIcon} />
              </div>
              <div className={styles.accounts}>
                {accounts.map((account) => {
                  return (
                    <div key={account.number} className={styles.account}>
                      <div className={styles.accountInfo}>
                        <h3 className={styles.accountTitle}>
                          Текущий (расчетный)
                        </h3>
                        <span className={styles.accountNumber}>
                          BY63ALFA{account.number}
                        </span>
                      </div>
                      <h3 className={styles.cash}>
                        <b>{account.money}</b> BYN
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.lastOperations}>
              <div className={styles.title}>
                <span className={styles.titleText}>Последние операции</span>
                <Settings className={styles.settingsIcon} />
              </div>
              <div className={styles.filtredBtn}>
                <button onClick={() => setFilter("all")}>Все</button>
                <button onClick={() => setFilter("min")}>Входящие</button>
                <button onClick={() => setFilter("plus")}>Исходящие</button>
              </div>
              <div className={styles.operations}>
                {filtredOperations.map((operation) => {
                  return (
                    <div key={operation.id} className={styles.operation}>
                      <div className={styles.operationDate}>
                        {operation.date}
                      </div>
                      <div className={styles.operationsInfo}>
                        <h3 className={styles.operationTitle}>
                          {operation.title}
                        </h3>
                        <h3
                          className={[
                            styles.operationMoney,
                            operation.type === "plus"
                              ? styles.plus
                              : styles.min,
                          ].join(" ")}
                        >
                          {operation.sumOperation}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.secondColumn}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
