import React from "react";
import styles from "./Attributes.module.css"
import Attribute from "./Attribute"

class Attributes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeAttributeInd: 0,
            activeAttribute: 0,
        }
    }

    onSelectAttribute = (el, index) => {
        // console.log(el)
        console.log(el.id)
        // console.log(el.items[0])
        // console.log(el.items[index])
        console.log(index)

        // console.log(el.items[0].id)
        // if(el[index] === el ) {
            this.setState({
                activeAttributeInd: index,
                activeAttribute: el.id,
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
const {activeAttribute, activeAttributeInd}= this.state
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
                                // onClick={() => this.onSelectAttribute(attribute, index)}
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
                                            onClick={() => this.onSelectAttribute(attribute, index)}
                                            className={`${styles.sizeItem}
                                         ${activeAttribute === attribute.id && activeAttributeInd === index ? styles.activeAttribute : ''}`}
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