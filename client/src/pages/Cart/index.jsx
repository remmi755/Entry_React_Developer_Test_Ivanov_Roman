import React from "react";
import styles from "./Cart.module.css"
import GroupOrder from "../../components/GroupOrder";
import Title from "../../components/Title"
import CartItem from "../../components/CartItem"
import {AppContext} from "../../components/AppContext"

class Cart extends React.Component {
    render() {
        const {cartList} = this.context

        return (
            <main className={styles.container}>
                <Title className={styles.titleHeader}>Cart
                    {cartList.length === 0 ? ' is Empty' : ''}
                </Title>
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