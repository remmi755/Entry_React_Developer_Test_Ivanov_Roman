import React from "react";
import styles from "./GroupOrder.module.css";
import Button from "./Button"

class GroupOrder extends React.Component {
    render() {
        const {totalCount, totalPrice, selectedCurrency, activeCurrency, cartList} = this.props
        const tax = (totalPrice * 21/100).toFixed(2)
          console.log(selectedCurrency)


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
                {/*<button onClick={this.increaseCount} className={styles.button}>ORDER</button>*/}
                {/*<button className={styles.button}>ORDER</button>*/}
                <Button className={styles.button}>ORDER</Button>
            </main>
        )
    }
}

export default GroupOrder;