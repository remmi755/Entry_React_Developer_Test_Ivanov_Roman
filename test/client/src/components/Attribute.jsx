import React from "react"
import styles from "./Attribute.module.css"

class Attribute extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: null
        }
    }

    handleClick = (el, index) => {
        console.log(el)
        // console.log(attribute.id)
        // console.log(id)
        //
        // console.log(index)
        // if (attribute.id === id && attribute.items[index] === el) {
            this.setState({
                activeAttributeInd: index
            })
        // }
    }
    render() {

        const {attribute, attributeColor, attributeSize, el, activeAttribute,activeAttributeInd, index} = this.props
        console.log(this.state.activeAttributeInd)
        console.log(index)
        return (
            <>
                <li
                    onClick={() => this.handleClick(el, index)}
                    // onClick={(e) => onSelectAttribute(attribute, attribute.id, el, index, e)}
                    className={`${styles.attribute} ${attribute.name === 'Color' ? attributeColor : attributeSize}
                                            ${ this.state.activeAttributeInd === index ? styles.activeAttribute : ''}
                                      
                                         `}
                    style={{backgroundColor: el.value}}
                >{attribute.name === 'Color' ? '': el.value}
                </li>
            </>
        )
    }
}

export default Attribute