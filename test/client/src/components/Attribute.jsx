import React from "react"
import styles from "./Attribute.module.css"
import {AppContext} from "./AppContext"

class Attribute extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: "",
        }
    }

    onSelectAttribute = (el, index) => {
        const {attribute, id} = this.props
console.log(el)
        if (attribute.items[index] === el && attribute.id === id) {
            this.setState({
                activeAttributeItem: attribute.items[index],
                activeAttribute: attribute
            })
        }
    }

    render() {
        // const { activeAttributeItem,  activeAttribute} = this.context
        const {activeAttributeItem,  activeAttribute} = this.state
        const {attribute, attributeColor, attributeSize } = this.props
        let name = attribute.name;
// console.log(activeAttributeItem)
// console.log(activeAttribute)

        return (
            <>
                {
                    attribute.items &&
                    attribute.items.map((el, index) => (
                        <li key={el.id}
                            onClick={() => this.onSelectAttribute(el, index)}
                            className={`${styles.attribute} ${name === 'Color' ? attributeColor : attributeSize}
                                            ${activeAttributeItem === el && activeAttribute === attribute ? `${name === "Color" ?
                                styles.activeAttributeColor : styles.activeAttribute}` : ''}`}
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