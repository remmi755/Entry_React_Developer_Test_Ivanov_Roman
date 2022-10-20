import React from "react"
import styles from "./Attribute.module.css"
import {AppContext} from "./AppContext"

class Attribute extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         value: "",
    //     }
    // }
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
        const { activeAttributeItem, activeAttribute, cartList} = this.context
        // const {activeAttributeItem, activeAttribute} = this.state
        const {attribute, id, attributeColor, attributeSize, onSelectAttribute, cartItem} = this.props
        let name = attribute.name;
// console.log(cartItem?.activeAttributeItem)
console.log(activeAttributeItem)

        console.log(cartItem?.attributes[0].items)
        const result = cartItem?.attributes[0].items.find( x => x.value === activeAttributeItem.value)
        console.log(result)
        console.log(result?.value === activeAttributeItem.value)
        console.log(result?.value)
        console.log(activeAttributeItem.value)

        return (
            <ul className={styles.attributeGroup}>
                {
                    attribute.items &&
                    attribute.items.map((el, index) => (
                        <li key={el.id}
                            onClick={() => onSelectAttribute(attribute, id, el, index)}
                            // onClick={() => onSelectAttribute(attribute, id, el, index)}
                            // onClick={() => this.onSelectAttribute(el, index)}
                            className={`${styles.attribute} ${name === 'Color' ? attributeColor : attributeSize}
                                            ${activeAttribute === attribute && activeAttributeItem === el ||( result?.value === el.value) ? `${name === "Color" ?
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