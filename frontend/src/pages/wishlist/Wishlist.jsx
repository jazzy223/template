import React from 'react'
import styles from './Wishlist.module.scss'
import {Helmet} from "react-helmet-async";

const Wishlist = () => {
    return (
       <div className={styles.container}>
            <Helmet title="Wishlist" />
       </div>
    )
}

export default Wishlist