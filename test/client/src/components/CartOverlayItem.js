import React from "react";
import styles from "./CartOverlayItem.module.css"
import Title from "./Title";
import Count from "./Count"
import Attributes from "./Attributes"

class CartOverlayItem extends React.Component {
    render() {
        console.log(this.props.cartItem)
        const{cartItem,  activeCurrency, id} = this.props
        // console.log(cartItem.prices[activeCurrency])
        let price = cartItem?.prices[activeCurrency].amount;
        let symbol = cartItem?.prices[activeCurrency].currency.symbol;
        // let img = cartItem.gallery[0]

        return(
            <main className={styles.container}>
                <section className={styles.content}>
                    <Title className={styles.titleCartOverlay}>{cartItem.name}</Title>
                    <Title className={styles.titleCartOverlay}>{cartItem.brand}</Title>
                    <p className={styles.price}>{symbol}{price}</p>
                    <Attributes
                        attributes={cartItem.attributes}
                        attributesId={cartItem.attributes.id}
                        attributeName={styles.attributeName}
                        attributeSize={styles.attributeSize}
                        attributeColor={styles.attributeColor}

                    />

                    {/*<p className={styles.price}>555</p>*/}
                </section>
                <div className={styles.sum}>
                    {/*<Count*/}
                    {/*    classSize={styles.countSize}*/}
                    {/*    children={orderItem.count}*/}
                    {/*    countIncrease={countIncrease}*/}
                    {/*    countDecrease={countDecrease}*/}
                    {/*    id={id}*/}
                    {/*    orderItem={orderItem}*/}
                    {/*/>*/}
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