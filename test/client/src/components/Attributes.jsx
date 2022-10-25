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
            activeAttributeItem,
            activeAttribute,
            cartItem
        } = this.props

        // console.log(cartItem)

        return (
            <>
                <ul className={styles.ul}>
                    {
                        attributes &&
                        attributes.map((attribute, id) => (
                            <>
                                <li className={attributeName} key={id}  >
                                    {attribute.name}</li>
                                <li key={`${attribute.id}_${id}`}>
                                    <Attribute
                                        cartItem={cartItem}
                                        key={`${attribute.id}_${attribute.type}`}
                                        // id={cartItem.id}
                                        activeAttributeItem={activeAttributeItem}
                                        activeAttribute={activeAttribute}
                                        onSelectAttribute={onSelectAttribute}
                                        attribute={attribute}
                                        attributeColor={attributeColor}
                                        attributeSize={attributeSize}
                                    />
                                </li>
                            </>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default Attributes;
