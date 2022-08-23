import React from "react";
import styles from "./ChoiceSize.module.css"

class ChoiceSize extends React.Component {
    // state = {
    //     items: this.props.product
    // }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // items: this.props.product,
    //         items: {},
    //         activeAttributes: 0
    //     }
    // }
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

    render() {

        // console.log(this.state)
        console.log(this.props)
        console.log(this.props.attributes)
        // console.log(this.props.product.attributes[1].items)

        // console.log(this.props.product.attributes[0].items)
        // let attributes = this.props.product.attributes[this.state.activeAttributes]
        // let attributes = this.props.product.attributes[0].items
        // console.log(attributes)
        // let [attribut] = attributes
        // console.log(attribut.items)
        return (
            <main className={styles.container}>
                <h5 className={styles.h5}>Size:</h5>
                <ul className={styles.sizes}>
                    {this.props.attributes &&
                        this.props.attributes?.map((attribute, id) => (
                                <li key={id} className={styles.sizeItem}
                                    style={{backgroundColor: attribute.value}}
                                >
                                    {attribute.value}
                                </li>
                            )
                        )
                    }
                    {/*<div className={styles.sizeItem}>XS</div>*/}
                    {/*<div className={`${styles.sizeItem} ${styles.active}`}>S</div>*/}
                    {/*<div className={styles.sizeItem}>M</div>*/}
                    {/*<div className={styles.sizeItem}>L</div>*/}
                </ul>
            </main>
        )
    }
}

export default ChoiceSize;