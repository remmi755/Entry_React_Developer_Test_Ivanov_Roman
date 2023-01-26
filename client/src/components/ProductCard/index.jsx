import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import Title from "../Title";
import Image from "../Image";
import Icon from "../Icon";
import { ReactComponent as InCart } from "../../assets/SVG/InCart.svg";
import { AppContext } from "../AppContext";

import { connect } from "react-redux";

class ProductCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  toggleHover = () => {
    this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
  };

  render() {
    const { onAddToCart } = this.context;
    const { product, activeCurrency } = this.props;
    const { isHovered } = this.state;
    const { name, gallery, prices, inStock } = product;
    const symbol = prices[activeCurrency].currency.symbol;
    const amount = prices[activeCurrency].amount;

    return (
      <div
        className={`${styles.container} ${isHovered ? styles.shadow : ""}`}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <Link to={`/ ${product.id}`}>
          <div className={styles.blockImg}>
            <Image
              className={styles.img}
              width={354}
              height={330}
              alt={name}
              src={gallery[0]}
            />
            {inStock ? (
              ""
            ) : (
              <Title className={styles.stock}>OUT OF STOCK</Title>
            )}
          </div>
          <div className={styles.content}>
            <Title className={styles.title}>{name}</Title>
            <div className={styles.price}>
              {symbol} {amount}
            </div>
          </div>
        </Link>
        {isHovered && inStock ? (
          <Icon className={styles.hover} onClick={() => onAddToCart(product)}>
            <InCart />
          </Icon>
        ) : null}
      </div>
    );
  }
}

ProductCard.contextType = AppContext;

const mapStateToProps = (state) => ({
  activeCurrency: state.currencies.activeCurrency,
  prices: state.pdp.prices,
  symbol: state.pdp.symbol,
});

export default connect(mapStateToProps)(ProductCard);
