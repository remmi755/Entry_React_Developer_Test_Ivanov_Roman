import React from "react";
import styles from "./CartOverlay.module.css"
import BagItem from "./BagItem";

class CartOverlay extends React.Component {
    render() {
        return(
            <main className={styles.container}>
                <span className={styles.title}>My Bag,</span>
                <span>3 items</span>
                <div className={styles.content}>
                        <BagItem />
                </div>
                <div className={styles.total}>
                    <span className={styles.totalItem}>Total</span>
                    <span className={styles.totalItem}>$200.00</span>
                </div>
                <div className={styles.groupButton}>
                 <button className={styles.buttonViewBag}>VIEW BAG</button>
                 <button className={styles.buttonCheckOut}>CHECK OUT</button>
                </div>
            </main>
        )
    }
}

export default CartOverlay