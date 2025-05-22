import React from 'react'
import styles from './Home.module.scss'
import {Helmet} from "react-helmet-async";

const Home = () => {
    return (
       <div className={styles.container}>
           <Helmet title="Home" />
       </div>
    )
}

export default Home