import React from "react";
import styles from "./GroupOrder.module.css";
import Button from "./Button"

class GroupOrder extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    // }
    //
    // increaseCount = () => {
    //     this.setState({count: this.state.count + 5})
    // }

    render() {
        const {activeCurrency, total, selectedCurrency} = this.props
        console.log(activeCurrency)
        const{totalCount, totalPrice}= total
        const tax = (totalPrice * 21/100).toFixed(2)

        // let symbol = orderItem.prices[activeCurrency].currency.symbol

        return (
            <main className={styles.order}>
                <div>
                    <span className={styles.tax}>Tax 21%:</span>
                    <span className={styles.taxValue}>{selectedCurrency}{tax}</span>
                </div>
                <div>
                    <span className={styles.quantity}>Quantity:</span>
                    <span className={styles.quantityValue}>{totalCount}</span>
                </div>
                <div>
                    <span className={styles.total}>Total:</span>
                    <span className={styles.totalValue}>{selectedCurrency}{totalPrice}</span>
                    {/*<span>{this.state.count}</span>*/}
                </div>
                {/*<button onClick={this.increaseCount} className={styles.button}>ORDER</button>*/}
                <button className={styles.button}>ORDER</button>
                {/*<Button className={styles.button}>ORDER</Button>*/}
            </main>
        )
    }
}

export default GroupOrder;