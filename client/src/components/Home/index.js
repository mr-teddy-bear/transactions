import React from 'react';
import Menu from '../common/Menu'
import styles from './styles.module.css';


function Home(){
    return(
        <div className={styles.main}>
            <Menu/>    
        </div>
    )
}

export default Home;