import React from "react";
import styles from "./Attributes.module.css"

class Attributes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeAttributeInd: 0,
            activeAttribute: 0,
        }
    }

    onSelectAttribute = (attribute, id, index) => {
        if(attribute.id === id ) {
            this.setState({
                activeAttributeInd: index,
                activeAttribute: attribute,
            })
        }
    }

    onSelectAttributes = (index, id) => {
        this.setState({
            activeAttributes: index,
            activeAttributeId: id,
        })
    }

    render() {
        // console.log(this.state.activeAttributes)
        // console.log(this.state.activeAttributeId)
        // console.log(this.props)
        // let attributes = this.props.product.attributes[this.state.activeAttributes]
        // let attributes = this.props.product.attributes[0].items
        // console.log(attributes)
        const {attributeName, attributeSize, attributeColor} = this.props

const {activeAttribute, activeAttributeInd}= this.state
        return (
            <>
                <ul className={styles.ul}>
                    {
                        this.props.attributes &&
                        this.props.attributes.map((attribute, index) => (
                            <>
                                <li className={attributeName}  key={`${attribute.id}_${attribute.name}`}>
                                    {attribute.name}</li>
                                <li  key={attribute.id}  >
                                    <ul className={styles.attributeGroup}
                                        // onClick={() => this.onSelectAttribute(attribute, index)}
                                    >
                                        {
                                            attribute.items &&
                                            attribute.items.map((el, index) => (
                                                <li key={el.id}
                                                    onClick={() => this.onSelectAttribute(attribute, attribute.id, index)}
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

export default Attributes;