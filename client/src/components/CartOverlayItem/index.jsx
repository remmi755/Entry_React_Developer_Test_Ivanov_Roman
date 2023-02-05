import React from "react";
import styles from "./CartOverlayItem.module.css";
import Title from "../Title";
import Count from "../Count";
import Attributes from "../Attributes";
import Image from "../Image";

import { connect } from "react-redux";
import {
  countDecrease,
  countIncrease,
} from "../../redux/cartList/slice";

class CartOverlayItem extends React.PureComponent {
  render() {
    const { cartItem, activeCurrency, countDecrease, countIncrease } =
      this.props;
    const price = cartItem?.prices[activeCurrency].amount;
    const symbol = cartItem?.prices[activeCurrency].currency.symbol;

    return (
      <main className={styles.container}>
        <section className={styles.content}>
          <Title className={styles.titleCartOverlay}>{cartItem.name}</Title>
          <Title className={styles.titleCartOverlay}>{cartItem.brand}</Title>
          <p className={styles.price}>
            {symbol}
            {price}
          </p>
          <Attributes
            cartItem={cartItem}
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
    );
  }
}

const mapStateToProps = (state) => ({
  activeCurrency: state.currencies.activeCurrency,
});

const mapDispatchToProps = { countDecrease, countIncrease };

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlayItem);
