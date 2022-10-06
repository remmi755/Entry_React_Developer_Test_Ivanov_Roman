import React from "react";
import styles from "./Attributes.module.css"
import Attribute from "./Attribute"

class Attributes extends React.Component {
    render() {
        const {attributeName, attributeSize, attributeColor, attributes} = this.props

        return (
            <>
                <ul className={styles.ul}>
                    {
                        attributes &&
                        attributes.map((attribute) => (
                            <>
                                <li className={attributeName}  key={`${attribute.id}_${attribute.name}`}>
                                    {attribute.name}</li>
                                <li  key={attribute.items}  >
                                    <ul key={attribute.name} className={styles.attributeGroup}
                                    >
                                        <Attribute
                                            key={`${attribute.items}_${attribute.id}`}
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
