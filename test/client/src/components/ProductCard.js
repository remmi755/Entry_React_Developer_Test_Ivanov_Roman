import React from "react";
import styles from "./ProductCard.module.css"
import Title from "./Title"
import Image from "./Image"
import Icon from "./Icon"
import {ReactComponent as InCart} from "../SVG/InCart.svg"

class ProductCard extends React.Component {
    render() {
        const {activeCurrency, isInCart} = this.props
        const {name, gallery, prices, inStock} = this.props.product;
        let symbol = prices[activeCurrency].currency.symbol
        let amount = prices[activeCurrency].amount
        // console.log(prices[activeCurrency])
        return (
            <div className={styles.container}>
                <div className={styles.blockImg}>
                    {/*<img className={styles.img} src={gallery[0]} alt="Photo product"/>*/}
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

export default ProductCard