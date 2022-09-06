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

    onSelectAttributes = (index, id) => {
        // alert(index)
        console.log(index)
        console.log(id)

        this.setState({
            activeAttributes: index,
            activeAttributeId: id,

        })
    }

    render() {
        console.log(this.state.activeAttributes)
        console.log(this.state.activeAttributeId)
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
                        < ul   onClick={() => this.onSelectAttributes(index, attribute.id)}>
                            {/*<h5>{attribute.id}</h5>*/}
                            <h5 className={styles.h5} key={`${attribute.id}_${attribute.name}`}>{attribute.name}</h5>
                            <ul className={styles.sizes}  key={attribute.name}>
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
                                            // onClick={() => this.onSelectAttributes(index, id)}
                                            // onClick={() => this.onSelectAttributes(id)}
                                            className={`${styles.sizeItem}
                                         ${activeAttributes === index && activeAttributeId === attribute.id? styles.activeAttribute : ''}`}
                                            style={{backgroundColor: el.value}}
                                        >{attribute.name === 'Color' ? '': el.value} {index} {el.id}
                                        </li>
                                    ))
                                }
                            </ul>
                        </ul>
                    ))
                }
            </main>
        )
    }
}

export default Attributes;