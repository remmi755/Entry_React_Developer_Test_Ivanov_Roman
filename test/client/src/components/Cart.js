import React from "react";
import styles from "./Cart.module.css"
import GroupOrder from "./GroupOrder";
import Header from "./Header";
import CartItem from "./CartItem"

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            cart : [],
            total:{
                totalPrice: this.props.orders.reduce((prev, curr) => {
                    return prev + curr.prices[this.props.activeCurrency].amount
                }, 0),
                totalCount: 0
            }
        }
    }

    countIncrease = (id) => {
        console.log(id)
        const {orders} = this.props
        console.log(this.state.count)

        orders.map((product) => {
            console.log(product)
            console.log(product.id)
            if (product.id === id) {
                this.setState({
                    count: this.state.count + 1
                })
            }
        })

        // this.setState((orders) => {
        //
        //      orders.map((product) => {
        //
        //         if(product.id === id) {
        //             return {
        //                 ...product,
        //                 count: this.state.count + 1,
        //             }
        //         }
        //
        //         return product
        //     })
        //
        // })

        // if (product.id === id) {
        //     this.setState({
        //         count: this.state.count + 1,
        //     })
        // }
    }

    render() {
        console.log(this.props.orders)
        const {orders} = this.props
        const {count} = this.state

console.log(count)

        return (
            <main className={styles.container}>
                <h1 className={styles.title}>Cart</h1>
                {orders &&
                    orders.map((orderItem, id) => (
                        <section className={styles.content} key={id}>
                            <CartItem
                                orderItem={orderItem}
                                count={count}
                                id={orderItem.id}
                                countIncrease={this.countIncrease}
                                countDecrease={this.props.countDecrease}
                                activeCurrency={this.props.activeCurrency}
                            />
                        </section>
                    ))
                }
                <div className={styles.groupOrder}>
                    <GroupOrder total={this.state.total}/>
                </div>
            </main>
        )
    }
}

export default Cart