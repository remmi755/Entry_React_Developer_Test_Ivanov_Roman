import React from "react";
import styles from "./Attributes.module.css"

class Attributes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // // items: this.props.product,
            // items: {},
            activeAttributes: 0
        }
    }
    //
    // //
    // componentDidMount() {
    //     console.log("Visible")
    //     // this.state = {
    //     //     items: this.props.product
    //     // }
    // }
    //
    // //
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.items !== this.props.items) {
    //         console.log("UPDATE")
    //         console.log(prevProps, prevState, this.props, this.state)
    //         console.log(this.props.product)
    //         this.setState({
    //             items: this.props.product
    //         })
    //     }
    // }

    onSelectAttributes = (el) => {
        console.log(el.id)

        // if()

        this.setState({
            activeAttribute: el.id,
        })
    }

    render() {
        // console.log(this.state)
        // console.log(this.props)
        // console.log(this.props.attributes)
        // let attributes = this.props.product.attributes[this.state.activeAttributes]
        // let attributes = this.props.product.attributes[0].items
        // console.log(attributes)
        // let value ;
const {activeAttribute}= this.state
        return (
            <main className={styles.container}>
                {
                    this.props.attributes &&
                    this.props.attributes.map((attribute, id) => (
                        <>
                            <h5 className={styles.h5} key={`${id}_${attribute.name}`}>{attribute.name}</h5>
                            <ul className={styles.sizes}  key={id}>
                                {
                                    attribute.items &&
                                    attribute.items.map((el, id, index) => (
                                        <li key={id}
                                            onClick={() => this.onSelectAttributes(el)}
                                            // onClick={() => console.log(index)}
                                            className={`${styles.sizeItem}
                                         ${activeAttribute === el.id ? styles.activeAttribute : ''}`}
                                            style={{backgroundColor: el.value}}
                                        >{attribute.name === 'Color' ? '': el.value}</li>
                                    ))
                                }
                            </ul>
                        </>
                    ))
                }
            </main>
        )
    }
}

export default Attributes;