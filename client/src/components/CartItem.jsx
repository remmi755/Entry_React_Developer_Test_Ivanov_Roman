import React from "react";
import styles from "./CartItem.module.css"
import Title from "./Title"
import Count from "./Count"
import Attributes from "./Attributes";
import ImageSlider from "./ImageSlider"
import {AppContext} from "./AppContext"

class CartItem extends React.Component {
    render() {
        const{orderItem, id} = this.props
        const{ activeCurrency, countDecrease , countIncrease} = this.context
        let amount = orderItem.prices[activeCurrency].amount;
        let symbol = orderItem.prices[activeCurrency].currency.symbol

        return(
            <main className={styles.container}>
                <section>
                    <div>
                        <Title className={styles.titleBrand}>{orderItem.brand}</Title>
                        <Title className={styles.titleName}>{orderItem.name}</Title>
                    </div>
                    <p className={styles.price}>{symbol}{amount}</p>
                    <div className={styles.choiceSize}>
                        <Attributes
                            cartItem={orderItem}
                            attributes={orderItem.attributes}
                            attributeName={styles.attributeName}
                            attributeSize={styles.attributeSize}
                            attributeColor={styles.attributeColor}
                        />
                    </div>
                </section>
                <section className={styles.groupImg}>
                    <div className={styles.count}>
                        <Count
                            classSize={styles.countSize}
                            children={orderItem.count}
                            countIncrease={countIncrease}
                            countDecrease={countDecrease}
                            id={id}
                            orderItem={orderItem}
                        />
                    </div>
                    <ImageSlider
                        slides={orderItem.gallery}
                        className={styles.slider}
                    />
                </section>
            </main>
        )
    }
};

CartItem.contextType = AppContext;

export default CartItem;