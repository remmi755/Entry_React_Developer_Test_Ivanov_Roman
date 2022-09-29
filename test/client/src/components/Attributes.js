import React from "react";
import styles from "./Attributes.module.css"
import {AppContext} from "./AppContext"

class Attributes extends React.Component {
    render() {
        const {attributeName, attributeSize, attributeColor, attributes} = this.props
        const { onSelectAttribute, activeAttribute, activeAttributeInd} = this.context

        return (
            <>
                <ul className={styles.ul}>
                    {
                        attributes &&
                        attributes.map((attribute) => (
                            <>
                                <li className={attributeName}  key={`${attribute.id}_${attribute.name}`}>
                                    {attribute.name}</li>
                                <li  key={attribute.id}  >
                                    <ul key={attribute.name} className={styles.attributeGroup}>
                                        {
                                            attribute.items &&
                                            attribute.items.map((el, index) => (
                                                <li key={el.id}
                                                    onClick={() => onSelectAttribute(attribute, attribute.id, index)}
                                                    className={`${styles.attribute} ${attribute.name === 'Color' ? attributeColor : attributeSize}
                                         ${ activeAttributeInd === index && activeAttribute === attribute ? styles.activeAttribute : ''}`}
                                                    style={{backgroundColor: el.value}}
                                                >{attribute.name === 'Color' ? '': el.value}
                                                </li>
                                            ))
                                        }
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

Attributes.contextType = AppContext;

export default Attributes;