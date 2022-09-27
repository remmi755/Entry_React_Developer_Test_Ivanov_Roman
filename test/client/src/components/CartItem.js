import React from "react";
import styles from "./CartItem.module.css"
import Title from "./Title"
import Count from "./Count"
import Attributes from "./Attributes";
import ImageSlider from "./ImageSlider"

class CartItem extends React.Component {
    render() {
        const{orderItem, activeCurrency, countDecrease, id ,count, countIncrease} = this.props
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
                            attributes={orderItem.attributes}
                            attributesId={orderItem.attributes.id}
                            attributeName={styles.attributeName}
                            attributeSize={styles.attributeSize}
                            attributeColor={styles.attributeColor}
                            onSelectAttribute={this.props.onSelectAttribute}
                            activeAttribute={this.props.activeAttribute}
                            activeAttributeInd={this.props.activeAttributeInd}
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

export default CartItem;