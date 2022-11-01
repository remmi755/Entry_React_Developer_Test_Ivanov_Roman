import React from "react";
import styles from "./Attributes.module.css"
import Attribute from "./Attribute"

class Attributes extends React.Component {
    constructor(props) {
        super(props);
        // this.state={
        //     attributes: this.props.attributes
        // }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.attributes !== this.props.attributes)
    //         console.log("change")
            // this.setState({
            //     attributes: this.props.attributes
            // })
    // }

    // componentDidUpdate(prevState, prevProps) {
    //     if (prevProps.attributes !== this.props.attributes) {
    //         console.log(prevProps.attributes)
    //         console.log(this.props.attributes)
    //         // console.log(this.state.product)
    //         // console.log(this.state.attributes[0].items[0])
    //         console.log('changed')
    //         // this.renderPDP();
    //         this.setState({
    //            attributes: this.props.attributes,
    //         })
    //         // this.renderPDP()
    //     }
    // }

    render() {
        const {
            attributeName,
            attributeSize,
            attributeColor,
            attributes,
            onSelectAttribute,
            cartItem
        } = this.props

        // console.log(cartItem)

        return (
            <ul className={styles.ul}>
                {
                    attributes &&
                    attributes.map((attribute, id) => (
                        <li key={`${id}_${attribute.items}`}>
                            <p className={attributeName}>{attribute.name}</p>
                            <Attribute
                                cartItem={cartItem}
                                onSelectAttribute={onSelectAttribute}
                                attribute={attribute}
                                attributeColor={attributeColor}
                                attributeSize={attributeSize}
                            />
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default Attributes;
