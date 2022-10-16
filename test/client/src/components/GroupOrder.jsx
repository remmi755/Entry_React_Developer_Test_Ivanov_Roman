import React from "react";
import styles from "./GroupOrder.module.css";
import Button from "./Button"
import {AppContext} from "./AppContext"

class GroupOrder extends React.Component {
    render() {

        let {totalCount, totalPrice, selectedCurrency} = this.context
        const tax = (totalPrice * 21/100).toFixed(2)

        return (
            <main className={styles.order}>
                <div>
                    <span className={styles.tax}>Tax 21%:</span>
                    <span className={styles.taxValue}>
                        {selectedCurrency}
                        {tax}
                    </span>
                </div>
                <div>
                    <span className={styles.quantity}>Quantity:</span>
                    <span className={styles.quantityValue}>
                        {totalCount}
                    </span>
                </div>
                <div>
                    <span className={styles.total}>Total:</span>
                    <span className={styles.totalValue}>
                        {selectedCurrency}
                        {totalPrice}
                    </span>
                </div>
                <Button className={styles.button} >ORDER</Button>
            </main>
        )
    }
}

GroupOrder.contextType = AppContext;

export default GroupOrder;

