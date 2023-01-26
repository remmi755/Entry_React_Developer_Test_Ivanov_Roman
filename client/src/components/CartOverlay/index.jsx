import React from "react";
import {Link} from "react-router-dom";
import styles from "./CartOverlay.module.css"
import CartOverlayItem from "../CartOverlayItem";
import Title from "../Title"
import Button from "../Button"
import {AppContext} from "../AppContext"

import {connect} from "react-redux";

class CartOverlay extends React.PureComponent {
    render() {
        const {totalCount, totalPrice, onHidePopup} = this.context
        const { activeCurrency, cartList} = this.props
        const symbol = cartList[0]?.prices[activeCurrency].currency.symbol;
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
                        <span className={styles.totalName}>Total</span>
                        <span className={styles.totalPrice}>{symbol}{totalPrice}</span>
                    </div>
                    <div className={styles.groupButton}>
                        <Link to="/cart">
                            <Button className={styles.buttonViewBag} onClick={onHidePopup} >VIEW BAG</Button>
                        </Link>
                        <Button className={styles.buttonCheckOut}>CHECK OUT</Button>
                    </div>
                </main>
            </div>
        )
    }
}

CartOverlay.contextType = AppContext;

// export default CartOverlay

const mapStateToProps = (state) => ({
    activeCurrency: state.currencies.activeCurrency,
    cartList:state.cartList.cartList
});

export default connect(mapStateToProps)(CartOverlay);