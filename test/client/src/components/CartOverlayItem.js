import React from "react";
import styles from "./CartOverlayItem.module.css"
import Title from "./Title";
import Attributes from "./Attributes"

class CartOverlayItem extends React.Component {
    render() {
        console.log(this.props.cartItem)
        const{cartItem,  activeCurrency, id} = this.props
        console.log(cartItem.prices[activeCurrency])
        let price = cartItem.prices[activeCurrency].amount;
        let symbol = cartItem.prices[activeCurrency].currency.symbol

        return(
            <main className={styles.container}>
                <section className={styles.content}>
                    <Title className={styles.titleCartOverlay}>{cartItem.name}</Title>
                    <Title className={styles.titleCartOverlay}>{cartItem.brand}</Title>
                    <Attributes
                        attributes={cartItem.attributes}
                        attributesId={cartItem.attributes.id}
                        attributeName={styles.attributeName}
                        attributeSize={styles.attributeSize}
                        attributeColor={styles.attributeColor}
                    />
                    <p className={styles.price}>{symbol}{price}</p>
                </section>
                <div className={styles.sum}>
                    <div className={styles.sumItem}>+</div>
                    <div className={`${styles.sumItem} ${styles.borderNone}`}>1</div>
                    <div className={styles.sumItem}>-</div>
                </div>
                <div className={styles.img}>
                    <img src="" alt="photo item"/>
                </div>
            </main>
        )
    }
}

export default CartOverlayItem