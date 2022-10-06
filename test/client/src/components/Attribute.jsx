import React from "react"
import styles from "./Attribute.module.css"

class Attribute extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: "",
        }
    }

    onSelectAttribute = (el, index) => {
        const {attribute} = this.props

        if (attribute.items[index] === el) {
            this.setState({
                activeAttributeItem: attribute.items[index],
            })
        }
    }

    render() {
        const { activeAttributeItem} = this.state
        const {attribute, attributeColor, attributeSize} = this.props
        let name = attribute.name;

        return (
            <>
                {
                    attribute.items &&
                    attribute.items.map((el, index) => (
                        <li key={el.id}
                            onClick={() => this.onSelectAttribute(el, index)}
                            className={`${styles.attribute} ${name === 'Color' ? attributeColor : attributeSize}
                                            ${activeAttributeItem === el ? `${name === "Color" ?
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

export default Attribute