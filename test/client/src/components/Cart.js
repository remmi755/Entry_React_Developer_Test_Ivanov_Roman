import React from "react";
import styles from "./Cart.module.css"
import GroupOrder from "./GroupOrder";
import Header from "./Header";
import CartItem from "./CartItem"

class Cart extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = ({
    //         cart : [],
    //     })
    // }

    render() {
        console.log(this.props.orders)
        const {orders, count} = this.props

        return (
            <main className={styles.container}>
                {/*<Header productCard={this.props.productCards} onClick={this.props.onClick} />*/}
                <h1 className={styles.title}>Cart</h1>
                {orders &&
                    orders.map((orderItem, id) => (
                        <section className={styles.content} key={id}>
                            <CartItem
                                orderItem={orderItem}
                                count={count}
                                id={id}
                                countIncrease={this.props.countIncrease}
                                countDecrease={this.props.countDecrease}
                                activeCurrency={this.props.activeCurrency}
                            />
                        </section>
                    ))
                }
                <div className={styles.groupOrder}>
                    <GroupOrder/>
                </div>
            </main>
        )
    }
}

export default Cart