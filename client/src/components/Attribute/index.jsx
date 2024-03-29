import React from "react";
import styles from "./Attribute.module.css";

import { connect } from "react-redux";
import { AppContext } from "../AppContext";

class Attribute extends React.PureComponent {
  render() {
    const {
      attribute,
      attributeColor,
      attributeSize,
      onSelectAttribute,
      cartItem,
      activeAttribute,
      activeAttributeIndex,
    } = this.props;

    const name = attribute.name;

    return (
      <ul className={styles.attributeGroup}>
        {attribute.items &&
          attribute.items.map((el, index) => (
            <li
              key={el.value}
              onClick={() => onSelectAttribute(attribute, el, index)}
              className={`${styles.attribute} ${
                name === "Color" ? attributeColor : attributeSize
              }
                                            ${
                (
                  activeAttributeIndex === index &&
                  activeAttribute ===
                  attribute) ||
                cartItem?.activeAttributeIndex ===
                index
                  ? `${
                    name === "Color"
                      ? styles.activeAttributeColor
                      : styles.activeAttribute
                  }`
                  : ""
              }`}
              style={{ backgroundColor: el.value }}
            >
              {name === "Color" ? "" : el.value}
            </li>
          ))}
      </ul>
    );
  }
}

Attribute.contextType = AppContext;

const mapStateToProps = (state) => ({
  activeAttributeIndex: state.attributes.activeAttributeIndex,
  activeAttribute: state.attributes.activeAttribute,
});

export default connect(mapStateToProps)(Attribute);
