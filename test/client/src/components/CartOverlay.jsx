import React from "react";
import {Link} from "react-router-dom";
import styles from "./CartOverlay.module.css"
import CartOverlayItem from "./CartOverlayItem";
import Title from "./Title"
import Button from "./Button"
import {AppContext} from "./AppContext"

class CartOverlay extends React.Component {

    clearListOrder = () => {
        localStorage.clear()
        window.location.reload()
    }

    render() {
        const {totalCount, cartList, totalPrice, activeCurrency, onHidePopup} = this.context
        const symbol = cartList[0]?.prices[activeCurrency].currency.symbol;

        console.log(cartList)

        return(
            <div>
                <main className={styles.container}>
                    <header className={styles.header}>
                        <Title className={styles.title}>My Bag,</Title>
                        <span className={styles.totalCount}>{totalCount} items</span>
                    </header>
                    <div className={styles.content}>
                        {
                            cartList &&
                            cartList.map((cartItem, id) => (
                                <CartOverlayItem
                                    cartItem={cartItem} key={id} id={id}
                                />
                            ))
                        }
                    </div>
                    <div className={styles.total}>
                        <span className={styles.totalItem}>Total</span>
                        <span className={styles.totalItem}>{symbol}{totalPrice}</span>
                    </div>
                    <div className={styles.groupButton}>
                        <Link to="/cart">
                            <Button className={styles.buttonViewBag} onClick={onHidePopup} >VIEW BAG</Button>
                        </Link>
                        <Button className={styles.buttonCheckOut} onClick={this.clearListOrder} >CHECK OUT</Button>
                    </div>
                </main>
            </div>
        )
    }
}

CartOverlay.contextType = AppContext;

export default CartOverlay