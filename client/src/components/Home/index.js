import React, { useState, useEffect } from "react";
import Menu from "../common/Menu";
import Header from "../common/Header";
import { ReactComponent as Settings } from "../../assets/img/settings.svg";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import Events from "../common/Events";
import ValuteCourse from "../common/ValuteCourse";
import { getMoney, getTransactions } from "../../store/transactions/actions";
import CircularProgress from "@material-ui/core/CircularProgress";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoney());
    dispatch(getTransactions());
  }, [dispatch]);
  const account = useSelector((state) => state.transactions.accounts);
  const operations = useSelector((state) => state.transactions.operations);
  const isRequesting = useSelector((state) => state.transactions.isRequesting);
  let filtredOperations = [];
  const [filter, setFilter] = useState("all");

  filter === "all"
    ? (filtredOperations = [...operations])
    : (filtredOperations = operations.filter((operation) => {
        return operation.type === filter;
      }));
  return (
    <div className={styles.main}>
      {isRequesting && (
        <div className={styles.preload}>
          <CircularProgress />
        </div>
      )}
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
                {/* {accounts.map((account) => {
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
                })} */}
                {
                  <div className={styles.account}>
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
                }
              </div>
            </div>

            <div className={styles.lastOperations}>
              <div className={styles.title}>
                <span className={styles.titleText}>Последние операции</span>
                <Settings className={styles.settingsIcon} />
              </div>
              <div className={styles.filtredBtn}>
                <button
                  className={[
                    styles.lastOperationBtn,
                    filter === "all" ? styles.active : "",
                  ].join(" ")}
                  onClick={() => setFilter("all")}
                >
                  Все
                </button>
                <button
                  className={[
                    styles.lastOperationBtn,
                    filter === "min" ? styles.active : "",
                  ].join(" ")}
                  onClick={() => setFilter("min")}
                >
                  Исходящие
                </button>
                <button
                  className={[
                    styles.lastOperationBtn,
                    filter === "plus" ? styles.active : "",
                  ].join(" ")}
                  onClick={() => setFilter("plus")}
                >
                  Входящие
                </button>
              </div>
              <div className={styles.operations}>
                {filtredOperations
                  .map((operation, index, array) => {
                    return (
                      <div key={operation.id} className={styles.operation}>
                        <div className={styles.operationDate}>
                          {("0" + new Date(operation.date).getDate()).slice(-2)}
                          /
                          {(
                            "0" +
                            (new Date(operation.date).getMonth() + 1)
                          ).slice(-2)}
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
                            {operation.type === "plus" ? "+" : ""}
                            {operation.sumOperation}.00 BYN
                          </h3>
                        </div>
                      </div>
                    );
                  })
                  .reverse()}
              </div>
            </div>
          </div>
          <div className={styles.secondColumn}>
            <Events />
            <ValuteCourse />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
