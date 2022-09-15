import React from "react";
import {Link} from "react-router-dom";
import styles from "./CartOverlay.module.css"
import CartOverlayItem from "./CartOverlayItem";
import Title from "./Title"
import Button from "./Button"

class CartOverlay extends React.Component {


    render() {
        const {totalCount, totalPrice, cartList, activeCurrency, activeCartOverlay} = this.props
        let symbol = cartList[0]?.prices[activeCurrency].currency.symbol;

        return(
            <div className={styles.modal}>
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
                                                 countIncrease={this.props.countIncrease}
                                                 countDecrease={this.props.countDecrease}
                                />
                            ))
                        }
                    </div>
                    <div className={styles.total}>
                        <span className={styles.totalItem}>Total</span>
                        <span className={styles.totalItem}>{symbol}{totalPrice}</span>
                        {/*<span className={styles.totalItem}>{totalPrice}</span>*/}
                    </div>
                    <div className={styles.groupButton}>
                        <Link to="/cart">
                            <Button className={styles.buttonViewBag}>VIEW BAG</Button>
                        </Link>
                        <Button className={styles.buttonCheckOut}>CHECK OUT</Button>
                    </div>
                </main>
            </div>

        )
    }
}

export default CartOverlay