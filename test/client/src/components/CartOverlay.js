import React from "react";
import styles from "./CartOverlay.module.css"
import CartOverlayItem from "./CartOverlayItem";
import Title from "./Title"

class CartOverlay extends React.Component {

    render() {
        const {totalCount, totalPrice, cartList, activeCurrency} = this.props
        let symbol = cartList[0].prices[activeCurrency].currency.symbol;
        console.log(symbol)
        return(
            <main className={styles.container}>
                <header className={styles.header}>
                    <Title className={styles.title}>My Bag,</Title>
                    <span className={styles.totalCount}>{totalCount} items</span>
                </header>
                <div className={styles.content}>
                    {
                        cartList &&
                        cartList.map((cartItem, id) => (
                            <CartOverlayItem cartItem={cartItem} key={id} id={id}
                                             activeCurrency={activeCurrency}
                            />
                        ))
                    }
                </div>
                <div className={styles.total}>
                    <span className={styles.totalItem}>Total</span>
                    <span className={styles.totalItem}>{symbol}{totalPrice}</span>
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