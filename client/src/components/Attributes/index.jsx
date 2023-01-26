import React from "react";
import styles from "./Attributes.module.css";
import Attribute from "../Attribute";

import {connect} from "react-redux";

class Attributes extends React.PureComponent {
  render() {
    const {
      attributeName,
      attributeSize,
      attributeColor,
      onSelectAttribute,
      cartItem,
    } = this.props;

    return (
      <ul className={styles.ul}>
        {cartItem.attributes &&
          cartItem.attributes.map((attribute, id) => (
            <li key={`${id}_${attribute.items}`}>
              <p className={attributeName}>{attribute.name}</p>
              <Attribute
                cartItem={cartItem}
                onSelectAttribute={onSelectAttribute}
                attribute={attribute}
                attributeColor={attributeColor}
                attributeSize={attributeSize}
              />
            </li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  attributes: state.attributes.attributes,
  cartList: state.cartList.cartList
});

export default connect(mapStateToProps )(Attributes);

