import React from "react";
import {Link} from "react-router-dom";
import styles from "./CartOverlay.module.css"
import CartOverlayItem from "./CartOverlayItem";
import Title from "./Title"
import Button from "./Button"
import {AppContext} from "./AppContext"

class CartOverlay extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cartList : JSON.parse(localStorage.getItem("cart"))
    //     }
    // }

    // componentDidMount() {
    //     const {getCartFromLS } = this.context
    //     // let cartList = JSON.parse(localStorage.getItem("cart"));
    //     // this.setState({ cartList });
    //     this.setState({ cartList: getCartFromLS() });
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.cartList !== this.state.cartList) {
    //         console.log('OK')
    //             // // let cartList = JSON.parse(localStorage.getItem("cart"));
    //             //   this.setState({ cartList: this.getCartFromLS()
    //             //   });
    //         }
    //     console.log(this.state.cartList)
    // }

    // getCartFromLS = () => {
    //     const data = localStorage.getItem('cart')
    //     return data ? JSON.parse(data) : [];
    // }
    clearListOrder = () => {
        localStorage.clear()
        window.location.reload()
        // this.setState({
        //     cartList: localStorage.getItem('cart')
        // })
    }

    render() {
        const {totalCount, cartList, totalPrice, activeCurrency, onHidePopup} = this.context
        // const{cartList} = this.state
        let symbol = cartList[0]?.prices[activeCurrency].currency.symbol;

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