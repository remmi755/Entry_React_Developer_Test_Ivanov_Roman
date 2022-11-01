import React from "react";
import styles from "./Attributes.module.css"
import Attribute from "./Attribute"

class Attributes extends React.Component {
    render() {
        const {
            attributeName,
            attributeSize,
            attributeColor,
            attributes,
            onSelectAttribute,
            cartItem
        } = this.props

        return (
            <ul className={styles.ul}>
                {
                    attributes &&
                    attributes.map((attribute, id) => (
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
                    ))
                }
            </ul>
        )
    }
}

export default Attributes;
