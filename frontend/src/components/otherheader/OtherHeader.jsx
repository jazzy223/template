import React from 'react'
import styles from './Otherheader.module.scss'
import {Link} from "react-router";

const OtherHeader = () => {
    return (
       <div className={styles.container}>
			<Link to={"/"}>Home</Link>
           <Link to={"/admin"}>Admin</Link>
           <Link to={"/wishlist"}>Wishlist</Link>
           <Link to={"/basket"}>Basket</Link>
       </div>
    )
}

export default OtherHeader
