import React from "react"
import styles from "./Attribute.module.css"
import {AppContext} from "./AppContext"

class Attribute extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: null,
        }
    }

    handleClick = (el, index) => {
        const {attribute} = this.props

console.log(el)

        if (attribute.items[index] === el) {
            this.setState({
                activeAttributeItem: attribute.items[index],
                activeAttributeInd: index,
            })
        }
    }

    render() {
        const { activeAttributeItem, activeAttributeInd} = this.context
        const {attribute, attributeColor, attributeSize, onSelectAttribute, id} = this.props
        // console.log(this.state.activeAttributeInd)
        console.log( activeAttributeItem)
        // console.log( this.state.activeAttribute)


       let name = attribute.name;
        // console.log(activeAttribute)
        return (
            <>
                {
                    attribute.items &&
                    attribute.items.map((el, index) => (
                        <li
                            // onClick={() => this.handleClick(el, index)}
                            // onClick={() => onSelectAttribute(attribute, el, index)}
                            onClick={() => onSelectAttribute(attribute, el, index)}
                            className={`${styles.attribute} ${name === 'Color' ? attributeColor : attributeSize}
                                           
                                            ${activeAttributeItem === el ? `${name === "Color" ? styles.activeAttributeColor : styles.activeAttribute}` : ''}
                                   
                                         `}
                            style={{backgroundColor: el.value}}
                        >{name === 'Color' ? '' : el.value}
                        </li>
                    ))
                }
            </>
        )
    }
}

Attribute.contextType = AppContext;

export default Attribute