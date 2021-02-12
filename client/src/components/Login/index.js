import React from 'react';
import styles from './styles.module.css';
import {logo} from '../../assets'
import PhoneIcon from '@material-ui/icons/Phone';

function Login(){
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.menu}>
                   <img src={logo} alt=""/>
                   <div className={styles.callBlock}>
                        <PhoneIcon style={{ fontSize: 40 }} color="secondary"/>
                        <span className={styles.phoneNumber}>7464</span>
                    </div>
                </div>
                <form action="" className={styles.form}>
                    <h1 className={styles.formTitle}>Интернет-Банк для бизнеса</h1>
                    <input className={styles.formInput} placeholder="E-mail" type="text" required/>
                    <input className={styles.formInput} placeholder="Password" type="password" required/>
                    <div className={styles.forgetDemo}>
                        <span className={styles.forgetText}>Забыли логин или пароль</span>
                        <span className={styles.forgetText}>Деморежим</span>
                    </div>
                    <button className={styles.btn}>Войти</button>
                </form>
            </div>
        </div>
    )
}

export default Login;