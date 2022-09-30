import React from "react";
import styles from "./GroupOrder.module.css";
import Button from "./Button"
import {AppContext} from "./AppContext"

class GroupOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderArr: [],
            attribute: ""
        }

    }

    doOrder = (arrOrders) => {
        const {  activeAttribute, activeItem } = this.props
        // this.setState({
            let arr = arrOrders.map((order) => {
                console.log(activeAttribute.id)
              let attribute = order.id
               order = {count: order.count, attributeName: activeAttribute.id, attribute: activeAttribute.items[activeItem].value, brand: order.brand, name: order.name}
                // order.count = this.props.count
                //     order.attribute = activeAttribute.items[activeItem].value
                // order = {...order,
                //     count: this.props.count,
                //     attribute: activeAttribute.items[activeItem]
                // }

                return order
            // })
        })
        console.log(arr)
    }

    render() {

        let {totalCount, totalPrice, selectedCurrency, cartList} = this.context
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

