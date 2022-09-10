import React from "react";
import styles from "./CartOverlay.module.css"
import CartOverlayItem from "./CartOverlayItem";
import Title from "./Title"

class CartOverlay extends React.Component {

    render() {
        const {totalCount, cartList} = this.props
        return(
            <main className={styles.container}>
                <header className={styles.header}>
                    <Title className={styles.title}>My Bag,</Title>
                    <span className={styles.totalCount}>{totalCount} items</span>
                </header>
                {/*<span className={styles.title}>My Bag,</span>*/}
                {/*<span>{totalCount} items</span>*/}
                <div className={styles.content}>
                    {
                        cartList &&
                        cartList.map((cartItem, id) => (
                            <CartOverlayItem cartItem={cartItem} key={id} id={id}/>
                        ))
                    }
                </div>
                <div className={styles.total}>
                    <span className={styles.totalItem}>Total</span>
                    <span className={styles.totalItem}>$200.00</span>
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