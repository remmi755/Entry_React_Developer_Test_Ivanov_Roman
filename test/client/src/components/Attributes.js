import React from "react";
import styles from "./Attributes.module.css"
import Attribute from "./Attribute"

class Attributes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeAttributes: 0,
            activeAttributeId: 0,
        }
    }

    onSelectAttribute = (el, index) => {
        console.log(el.id)
        console.log(index)
        console.log(el.items[index])

        // console.log(el.items[0].id)
        // if(el[index] === el ) {
            this.setState({
                activeAttributes: index,
                activeAttributeId: el.id,
            })
        // }


    }

    onSelectAttributes = (index, id) => {
        // alert(index)
        // console.log(index)
        // console.log(id)

        this.setState({
            activeAttributes: index,
            activeAttributeId: id,

        })
    }

    render() {
        // console.log(this.state.activeAttributes)
        // console.log(this.state.activeAttributeId)
        // console.log(this.props)
        // console.log(this.props.attributes[this.state.activeAttributes].items[1])
        // let attributes = this.props.product.attributes[this.state.activeAttributes]
        // let attributes = this.props.product.attributes[0].items
        // console.log(attributes)
        // let value ;
const {activeAttributes, activeAttributeId}= this.state
        return (
            <main className={styles.container}>
                {
                    this.props.attributes &&
                    this.props.attributes.map((attribute, index) => (
                        < ul className={styles.ul}
                            // onClick={() => this.onSelectAttributes(index, attribute.id)}
                            // onClick={() => this.onSelectAttribute(attribute, index)}

                        >
                            {/*<h5>{attribute.id}</h5>*/}
                            <h5 className={styles.h5} key={`${attribute.id}_${attribute.name}`}>{attribute.name}</h5>
                            <li
                                onClick={() => this.onSelectAttribute(attribute, index)}
                                // className={`${styles.sizes}
                                //          ${activeAttributes === index && activeAttributeId === attribute.id? styles.activeAttribute : ''}`}
                                className={styles.sizes}
                                key={attribute.name}>
                                {
                                    attribute.items &&
                                    attribute.items.map((el, index) => (
                                        // <li>
                                        //     <Attribute
                                        //     el={el}
                                        //     id ={id}
                                        //     index={index}
                                        //     attribute={attribute}
                                        //     activeAttributes={activeAttributes}
                                        //     activeAttributeId={activeAttributeId}
                                        //     onSelectAttributes={this.onSelectAttributes}
                                        //     />
                                        // </li>
                                        <li key={el.id}
                                            onClick={() => this.onSelectAttribute(el, index)}
                                            className={`${styles.sizeItem}
                                         ${activeAttributes === index && activeAttributeId === el.id? styles.activeAttribute : ''}`}
                                            style={{backgroundColor: el.value}}
                                        >{attribute.name === 'Color' ? '': el.value} {index} {el.id}
                                        </li>
                                    ))
                                }
                            </li>
                        </ul>
                    ))
                }
            </main>
        )
    }
}

export default Attributes;