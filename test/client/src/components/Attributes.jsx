import React from "react";
import styles from "./Attributes.module.css"
import {AppContext} from "./AppContext"
import Attribute from "./Attribute"

class Attributes extends React.Component {

    // handleClick = (el, index) => {
    //     const {attribute} = this.props
    //     if (attribute.items[index] === el) {
    //         this.setState({
    //             activeAttribute: attribute.items[index]
    //         })
    //     }
    // }

    render() {
        const {attributeName, attributeSize, attributeColor, attributes, onSelectAttribute} = this.props
        const {  activeAttribute, activeAttributeInd} = this.context

        return (
            <>
                <ul className={styles.ul}>
                    {
                        attributes &&
                        attributes.map((attribute, id) => (
                            <>
                                <li className={attributeName}  key={`${attribute.id}_${attribute.name}`}>
                                    {attribute.name}</li>
                                <li  key={attribute.id}  >
                                    <ul key={attribute.name} className={styles.attributeGroup}
                                        // onClick={(e) => onSelectAttribute(attribute, attribute.id, e)}
                                    >

                                        <Attribute
                                            // key={el.id}
                                            id={attribute.id}

                                            // handleClick={this.handleClick}
                                            onSelectAttribute={onSelectAttribute}
                                            attribute={attribute}
                                            attributeColor={attributeColor}
                                            attributeSize={attributeSize}
                                            activeAttribute={activeAttribute}
                                            activeAttributeInd={activeAttributeInd}
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

Attributes.contextType = AppContext;

export default Attributes;

// {
//     attribute.items &&
//     attribute.items.map((el, index) => (
//         <Attribute
//             key={el.id}
//             el={el}
//             index={index}
//             attribute={attribute}
//             attributeColor={attributeColor}
//             attributeSize={attributeSize}
//             activeAttribute={activeAttribute}
//             activeAttributeInd={activeAttributeInd}
//         />
        //     <li key={el.id}
        //         onClick={() => this.handleClick(attribute,attribute.id, el, index)}
        //         // onClick={(e) => onSelectAttribute(attribute, attribute.id, el, index, e)}
        //         className={`${styles.attribute} ${attribute.name === 'Color' ? attributeColor : attributeSize}
        // ${  activeAttribute === el && attribute.id? styles.activeAttribute : ''} `}
        //         style={{backgroundColor: el.value}}
        //     >{attribute.name === 'Color' ? '': el.value}{this.state.value}
        //     </li>
//     ))
// }