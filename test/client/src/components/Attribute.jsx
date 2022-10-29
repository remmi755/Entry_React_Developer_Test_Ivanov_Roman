import React from "react"
import styles from "./Attribute.module.css"
import {AppContext} from "./AppContext"

class Attribute extends React.Component {
    constructor(props) {
        super(props);
    //     this.state={
    //         value: "",
    //     }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.attribute !== this.props.attribute)
            console.log("changed attributes")
            // this.setState({
            //     attributes: this.props.attributes
            // })
    }


//
//     onSelectAttribute = (el, index) => {
//         const {attribute, id, } = this.props
//         const {activeAttributeItem,  activeAttribute } = this.context
//         // console.log(el)
//
//         if (attribute.items[index] === el && attribute.id === id) {
// // console.log(attribute.items[index])
//             this.setState({
//                 activeAttributeItem: attribute.items[index],
//                 activeAttribute: attribute
//             })
//         }
//     }


    render() {
        const { activeAttributeItem, activeAttribute, activeAttributeIndex, cartList} = this.context
        // const {activeAttributeItem, activeAttribute} = this.state
        const {attribute, id, attributeColor, attributeSize, onSelectAttribute, cartItem} = this.props
        let name = attribute.name;
console.log(attribute)

// console.log(activeAttribute === index && activeAttributeItem === el
//     ||( result?.value === el.value))
//         activeAttributeItem.value === el.value

        // activeAttributeIndex === index && activeAttribute === attribute
        // || cartItem?.activeAttributeItem=== el
// console.log(cartItem)
        return (
            <ul className={styles.attributeGroup}>
                {
                    attribute.items &&
                    attribute.items.map((el, index) => (
                        <li key={el.id}
                            // onClick={() => onSelectAttribute(attribute, id, el, index)}
                            onClick={() => onSelectAttribute(attribute, el, index)}
                            className={`${styles.attribute} ${name === 'Color' ? attributeColor : attributeSize}
                                            ${ activeAttributeIndex === index && activeAttribute === attribute
                            || cartItem?.activeAttributeIndex === index ? `${name === "Color" ?
                                styles.activeAttributeColor : styles.activeAttribute}` : ''}`}
                            style={{backgroundColor: el.value}}
                        >{name === 'Color' ? '' : el.value}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

Attribute.contextType = AppContext;

export default Attribute