import React from "react";
import styles from "./ProductCard.module.css"
import Title from "./Title"
import Image from "./Image"
import Icon from "./Icon"
import {ReactComponent as InCart} from "../assets/SVG/InCart.svg"
import {AppContext} from "./AppContext"

class ProductCard extends React.Component {
    render() {
        const {activeCurrency,} = this.context
        const { isInCart, product} = this.props
        const {name, gallery, prices, inStock} = product;
        let symbol = prices[activeCurrency].currency.symbol
        let amount = prices[activeCurrency].amount

        return (
            <div className={`${styles.container} ${isInCart? styles.shadow : ""}`}>
                <div className={styles.blockImg}>
                    <Image
                        className={styles.img}
                        width={354}
                        height={330}
                        alt={name}
                        src={gallery[0]}
                    />
                    {isInCart ?
                        (<Icon className={styles.inCart}><InCart/></Icon>) : null}
                    {inStock ? "" : (<Title className={styles.stock}>OUT OF STOCK</Title>)}
                </div>
                <div className={styles.content}>
                    <Title className={styles.title}>{name}</Title>
                    <div className={styles.price}>Price: {symbol} {amount}</div>
                </div>
            </div>
        )
    }
};

ProductCard.contextType = AppContext;

export default ProductCard