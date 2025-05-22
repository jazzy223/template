import React from 'react'
import styles from './Basket.module.scss'
import {Helmet} from "react-helmet-async";

const Basket = () => {
    return (
       <div className={styles.container}>
            <Helmet title="Basket" />
       </div>
    )
}

export default Basket