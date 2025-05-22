import React from 'react'
import styles from './Admin.module.scss'
import {Helmet} from "react-helmet-async";

const Admin = () => {
    return (
       <div className={styles.container}>
           <Helmet title="Admin" />
       </div>
    )
}

export default Admin