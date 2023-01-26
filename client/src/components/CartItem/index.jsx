import React from "react";
import styles from "./CartItem.module.css";
import Title from "../Title";
import Count from "../Count";
import Attributes from "../Attributes";
import ImageSlider from "../ImageSlider";

import { connect } from "react-redux";
import { setPrices, setSymbol } from "../../redux/pdp/slice";
import {
  countDecrease,
  countIncrease,
} from "../../redux/cartList/slice";

class CartItem extends React.PureComponent {
  render() {
    const {
      orderItem,
      activeCurrency,
      id,
      setPrices,
      setSymbol,
      countDecrease,
      countIncrease,
    } = this.props;
    const amount = orderItem.prices[activeCurrency].amount;
    const symbol = orderItem.prices[activeCurrency].currency.symbol;
    setPrices(amount);
    setSymbol(symbol);

    return (
      <main className={styles.container}>
        <section>
          <div>
            <Title className={styles.titleBrand}>{orderItem.brand}</Title>
            <Title className={styles.titleName}>{orderItem.name}</Title>
          </div>
          <p className={styles.price}>
            {symbol}
            {amount}
          </p>
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
          <ImageSlider slides={orderItem.gallery} className={styles.slider} />
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCurrency: state.currencies.activeCurrency,
});

const mapDispatchToProps = { setPrices, setSymbol, countDecrease, countIncrease };

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
