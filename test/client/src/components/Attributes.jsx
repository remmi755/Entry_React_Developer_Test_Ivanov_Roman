import React from "react";
import styles from "./Attributes.module.css"
import Attribute from "./Attribute"

class Attributes extends React.Component {
    render() {
        const {attributeName, attributeSize, attributeColor, attributes,  onSelectAttribute, activeAttributeItem, activeAttribute} = this.props

        return (
            <>
                <ul className={styles.ul}>
                    {
                        attributes &&
                        attributes.map((attribute, id) => (
                            <>
                                <li className={attributeName}  key={`${attribute.id}_${attribute.name}`}>
                                    {attribute.name}</li>
                                <li  key={`${attribute.id}_${attribute.type}`}  >
                                    <ul key={attribute} className={styles.attributeGroup}
                                    >
                                        <Attribute
                                            key={`${attribute.type}_${attribute.id}`}
                                            id={attribute.id}
                                            activeAttributeItem={activeAttributeItem}
                                            activeAttribute={activeAttribute}
                                            onSelectAttribute={ onSelectAttribute}
                                            attribute={attribute}
                                            attributeColor={attributeColor}
                                            attributeSize={attributeSize}
                                        />
                                    </ul>
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
