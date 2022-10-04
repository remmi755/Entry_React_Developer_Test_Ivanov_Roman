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
                activeAttribute: attribute.items[index],
                activeAttributeInd: index
            })
        }
    }

    render() {
        const {onSelectAttribute, activeAttribute, activeAttributeInd} = this.context
        const {attribute, attributeColor, attributeSize, id} = this.props
        // console.log(this.state.activeAttributeInd)
        // console.log(attribute.items[index])
       let name = attribute.name;
        // console.log(activeAttribute)
        return (
            <>
                {
                    attribute.items &&
                    attribute.items.map((el, index) => (
                        <li
                            onClick={() => this.handleClick(el, index)}
                            // onClick={() => onSelectAttribute(attribute, attribute.id, el, index)}
                            // onClick={(e) => onSelectAttribute(attribute, attribute.id, el, index, e)}
                            className={`${styles.attribute} ${attribute.name === 'Color' ? attributeColor : attributeSize}
                                           
                                            ${this.state.activeAttribute === el ? `${name === "Color" ? styles.activeAttributeColor : styles.activeAttribute}` : ''}
                                   
                                         `}
                            style={{backgroundColor: el.value}}
                        >{attribute.name === 'Color' ? '' : el.value}
                        </li>
                    ))
                }
            </>
        )
    }
}

Attribute.contextType = AppContext;

export default Attribute