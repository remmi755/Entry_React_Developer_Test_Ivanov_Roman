import React from "react";
import styles from "./Cart.module.css"
import GroupOrder from "./GroupOrder";
import Title from "./Title"
import CartItem from "./CartItem"
import {AppContext} from "./AppContext"

class Cart extends React.Component {
    render() {
        const {cartList} = this.context

        return (
            <main className={styles.container}>
                <Title className={styles.titleHeader}>Cart</Title>
                {cartList &&
                    cartList.map((orderItem, id) => (
                        <section className={styles.content} key={id}>
                            <CartItem
                                orderItem={orderItem}
                                id={orderItem.id}
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

Cart.contextType = AppContext;

export default Cart