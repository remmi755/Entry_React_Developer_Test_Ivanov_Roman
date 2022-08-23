import React from "react";
import styles from "./GroupOrder.module.css";

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
        return (
            <main className={styles.order}>
                <div>
                    <span className={styles.tax}>Tax 21%:</span>
                    <span className={styles.taxValue}>$42.00</span>
                </div>
                <div>
                    <span className={styles.quantity}>Quantity:</span>
                    <span className={styles.quantityValue}>3</span>
                </div>
                <div>
                    <span className={styles.total}>Total:</span>
                    <span className={styles.totalValue}>$200.00</span>
                    {/*<span>{this.state.count}</span>*/}
                </div>
                {/*<button onClick={this.increaseCount} className={styles.button}>ORDER</button>*/}
                <button className={styles.button}>ORDER</button>
            </main>
        )
    }
}

export default GroupOrder;