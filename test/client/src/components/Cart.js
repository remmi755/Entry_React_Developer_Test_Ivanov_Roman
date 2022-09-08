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
                totalPrice: (this.props.cartList.reduce((prev, curr) => {
                    return prev + curr.prices[this.props.activeCurrency].amount * curr.count
                }, 0)).toFixed(2),
                totalCount: this.props.cartList.reduce((prev, curr) => {
                    return prev + curr.count
                }, 0)
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count ||
        prevProps.activeCurrency !== this.props.activeCurrency) {
            // console.log(this.props.cartList)
            this.setState({
                total:{
                    totalPrice: (this.props.cartList.reduce((prev, curr) => {
                        return prev + curr.prices[this.props.activeCurrency].amount * curr.count
                    }, 0)).toFixed(2),
                    totalCount: this.props.cartList.reduce((prev, curr) => {
                        return prev + curr.count
                    }, 0)
                }
            })
        }
    }


    countIncrease = (product, id) => {
        if(product.id === id) {
            this.setState({
                count: ++product.count
            })
        }
    }

    countDecrease = (product, id) => {
        const {deleteCartItem} = this.props;

        if (product.id === id) {
            this.setState({
                count: product.count - 1 > 0 ? --product.count : deleteCartItem(id),
            })
        }
    }

    render() {
        // console.log(this.props.cartList)
        const {cartList,productCards, activeCurrency} = this.props
       // const symbol = productCards[0].products[0].prices[activeCurrency].currency.symbol
        const {count} = this.state

// console.log(count)

        return (
            <main className={styles.container}>
                <h1 className={styles.title}>Cart</h1>
                {cartList &&
                    cartList.map((orderItem, id) => (
                        <section className={styles.content} key={id}>
                            <CartItem
                                orderItem={orderItem}
                                count={count}
                                id={orderItem.id}
                                countIncrease={this.countIncrease}
                                countDecrease={this.countDecrease}
                                activeCurrency={this.props.activeCurrency}

                            />
                        </section>
                    ))
                }
                <div className={styles.groupOrder}>
                    <GroupOrder total={this.state.total}
                                activeCurrency={this.props.activeCurrency}
                                selectedCurrency={this.props.selectedCurrency}
                                total={this.state.total}

                    />
                </div>
            </main>
        )
    }
}

export default Cart