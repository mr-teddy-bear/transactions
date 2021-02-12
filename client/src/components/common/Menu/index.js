import React from 'react';
import styles from './styles.module.css';
import {letter} from '../../../assets'
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import RestoreIcon from '@material-ui/icons/Restore';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import RedeemIcon from '@material-ui/icons/Redeem';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TuneIcon from '@material-ui/icons/Tune';
import { grey, red } from '@material-ui/core/colors';

function Menu(){
    return(
        <div className={styles.menu}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src={letter} alt=""/>  
            </div>
            <div className={[styles.squareContainer, styles.active].join(' ')}>
                <NoteAddIcon style={{color: red[500]}}/>
                <span className={styles.squareText}>Счета</span>
            </div>
            <div className={styles.squareContainer}>
                <RestoreIcon style={{color: grey[400]}}/>
                <span className={styles.squareText}>Выписки</span>
            </div>
            <div className={styles.squareContainer}>
                <NextWeekIcon style={{color: grey[400]}}/>
                <span className={styles.squareText}>Документы</span>
            </div>
            <div className={styles.squareContainer}>
                <AccountBalanceWalletIcon style={{color: grey[400]}}/>
                <span className={styles.squareText}>Зарплата</span>
            </div>
            <div className={styles.squareContainer}>
                <CreditCardIcon style={{color: grey[400]}}/>
                <span className={styles.squareText}>Карты</span>
            </div>
            
            <div className={styles.squareContainer}>
                <EuroSymbolIcon style={{color: grey[400]}}/>
                <span className={styles.squareText}>Обен валют</span>
            </div>
            <div className={styles.squareContainer}>
                <RedeemIcon style={{color: grey[400]}}/>
                <span className={styles.squareText}>Продукты</span>
            </div>
            <div className={styles.squareContainer}>
                <DateRangeIcon style={{color: grey[400]}}/>
                <span className={styles.squareText}>События</span>
            </div>
            <div className={styles.squareContainer}>
                <TuneIcon style={{color: grey[400]}}/>
                <span className={styles.squareText}>Настройки</span>
            </div>
        </div>
    )
}

export default Menu;