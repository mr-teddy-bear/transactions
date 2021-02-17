import React from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logo } from "../../assets";
import PhoneIcon from "@material-ui/icons/Phone";
import CircularProgress from "@material-ui/core/CircularProgress";
import { login, changeMessage } from "../../store/auth/actions";
import validationSchema from "./validationLoginSchema";
import { Formik } from "formik";
import SnackBar from "../common/SnackBar";

function Login() {
  const dispatch = useDispatch();
  const isRequesting = useSelector((state) => state.auth.isRequesting);
  const dialogMessage = useSelector((state) => state.auth.message);
  return (
    <div className={styles.main}>
      {isRequesting && (
        <div className={styles.preload}>
          <CircularProgress />
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.menu}>
          <img src={logo} alt="" />
          <div className={styles.callBlock}>
            <PhoneIcon style={{ fontSize: 40 }} color="secondary" />
            <span className={styles.phoneNumber}>7464</span>
          </div>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(login(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form method="post" className={styles.form} onSubmit={handleSubmit}>
              <input
                id="emailInput"
                className={[
                  styles.formInput,
                  errors.email && touched.email ? styles.inputError : "",
                ].join(" ")}
                placeholder="E-mail"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <input
                className={[
                  styles.formInput,
                  errors.password && touched.password ? styles.inputError : "",
                ].join(" ")}
                type="password"
                name="password"
                placeholder="Пароль"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              <div className={styles.forgetDemo}>
                <span className={styles.forgetText}>
                  Забыли логин или пароль
                </span>
                <span className={styles.forgetText}>Деморежим</span>
              </div>
              <button className={styles.btn}>Войти</button>
            </form>
          )}
        </Formik>

        {/* <form action="" className={styles.form}>
          <h1 className={styles.formTitle}>Интернет-Банк для бизнеса</h1>
          <input
            className={styles.formInput}
            placeholder="E-mail"
            type="text"
            required
          />
          <input
            className={styles.formInput}
            placeholder="Password"
            type="password"
            required
          />
        </form> */}
      </div>
      {!!dialogMessage && (
        <SnackBar
          dialogMessage={dialogMessage}
          closeHandler={() => dispatch(changeMessage(""))}
        />
      )}
    </div>
  );
}

export default Login;
