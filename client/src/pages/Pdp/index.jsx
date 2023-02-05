import React from "react";
import styles from "./Pdp.module.css";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Image from "../../components/Image";
import Attributes from "../../components/Attributes";

import { useParams } from "react-router-dom";
import { AppContext } from "../../components/AppContext";

import { connect } from "react-redux";
import { fetchProduct, onChangeImage } from "../../redux/pdp/slice";
import {
  fetchAttributes,
  setActiveAttribute,
  setActiveAttributeIndex,
  setActiveAttributeItem,
  setAttributes,
} from "../../redux/attributes/slice";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class PDP extends React.PureComponent {
  constructor(props) {
    super(props);
    this.cardId = this.props.match.params["cardId"].substring(1);
  }

  componentDidMount = async () => {
    await this.renderPDP();
    await this.getAttributes();
  };

  renderPDP = async () => {
    const { fetchProduct } = this.props;
    await fetchProduct(this.cardId);
  };

  getAttributes = async () => {
    const { fetchAttributes } = this.props;
    await fetchAttributes(this.cardId);
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.product.attributes !== this.props.product.attributes) {
      this.props.setActiveAttributeItem("");
      this.props.setActiveAttributeIndex("");
      this.props.setAttributes(this.props.product.attributes);
    }
  }

  componentWillUnmount() {
    this.props.setActiveAttributeItem("");
    this.props.setActiveAttributeIndex("");
    this.props.setActiveAttribute("");
  }

  render() {
    const { currentImgId, onChangeImage, product, activeCurrency } = this.props;
    const { onAddToCart, onSelectAttribute } = this.context;
    const amount =
      product && product.prices && product.prices[activeCurrency].amount;
    const symbol =
      product &&
      product.prices &&
      product.prices[activeCurrency].currency.symbol;
    const description = `${product.description}`.replace(
      /(\<(\/?[^>]+)>)/g,
      ""
    );

    return (
      <main className={styles.container}>
        <section className={styles.blockImg}>
          {product.gallery &&
            product.gallery.map((img, id) => (
              <Image
                onClick={() => onChangeImage(id)}
                key={id}
                className={styles.blockImgItem}
                width={79}
                height={80}
                src={img}
              />
            ))}
        </section>
        <section className={styles.blockGroup}>
          {product.gallery && (
            <Image
              className={styles.groupImg}
              width={610}
              height={511}
              src={product.gallery[currentImgId]}
              alt={product.name}
            />
          )}
          <div className={styles.groupChoice}>
            <Title className={styles.titleBrand}>{product.brand}</Title>
            <Title className={styles.titleName}>{product.name}</Title>
            <div className={styles.attributes}>
              <Attributes
                cartItem={product}
                onSelectAttribute={onSelectAttribute}
                attributeName={styles.attributeName}
                attributeSize={styles.attributeSize}
                attributeColor={styles.attributeColor}
              />
            </div>
            <div className={styles.groupChoicePrice}>
              <h5 className={styles.h5}>PRICE:</h5>
              <div className={styles.price}>
                {symbol}
                {amount}
              </div>
            </div>
            <Button
              className={styles.button}
              onClick={() => onAddToCart(product)}
            >
              ADD TO CART
            </Button>
            <p className={styles.description}>{description}</p>
          </div>
        </section>
      </main>
    );
  }
}

PDP.contextType = AppContext;

const mapStateToProps = (state) => ({
  activeCurrency: state.currencies.activeCurrency,
  currentImgId: state.pdp.currentImgId,
  product: state.pdp.product,
  activeAttributeIndex: state.attributes.activeAttributeIndex,
  activeAttributeItem: state.attributes.activeAttributeItem,
  activeAttribute: state.attributes.activeAttribute,
});

const mapDispatchToProps = {
  onChangeImage,
  fetchProduct,
  fetchAttributes,
  setActiveAttribute,
  setActiveAttributeIndex,
  setActiveAttributeItem,
  setAttributes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PDP));
