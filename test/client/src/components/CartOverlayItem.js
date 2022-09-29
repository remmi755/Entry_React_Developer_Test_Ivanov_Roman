import React from "react";
import styles from "./CartOverlayItem.module.css"
import Title from "./Title";
import Count from "./Count"
import Attributes from "./Attributes"
import Image from "./Image"
import {AppContext} from "./AppContext"

class CartOverlayItem extends React.Component {
    render() {
        const {cartItem} = this.props
        const{  activeCurrency, countIncrease, countDecrease} = this.context
        let price = cartItem?.prices[activeCurrency].amount;
        let symbol = cartItem?.prices[activeCurrency].currency.symbol;

        return(
            <main className={styles.container}>
                <section className={styles.content}>
                    <Title className={styles.titleCartOverlay}>{cartItem.name}</Title>
                    <Title className={styles.titleCartOverlay}>{cartItem.brand}</Title>
                    <p className={styles.price}>{symbol}{price}</p>
                    <Attributes
                        attributes={cartItem.attributes}
                        attributeName={styles.attributeName}
                        attributeSize={styles.attributeSize}
                        attributeColor={styles.attributeColor}
                    />
                </section>
                <div className={styles.count}>
                    <Count
                        classSize={styles.countSize}
                        children={cartItem.count}
                        countIncrease={countIncrease}
                        countDecrease={countDecrease}
                        id={cartItem.id}
                        orderItem={cartItem}
                    />
                </div>
                <Image
                    className={styles.img}
                    width={121}
                    height={190}
                    alt={cartItem.name}
                    src={cartItem.gallery[0]}
                />
            </main>
        )
    }
}

CartOverlayItem.contextType = AppContext;

export default CartOverlayItem