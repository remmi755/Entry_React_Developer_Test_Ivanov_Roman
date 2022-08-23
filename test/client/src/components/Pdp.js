import React from "react";
import styles from "./Pdp.module.css"
import GroupTitle from "./GroupTitle";
import ChoiceSize from "./ChoiseSize";
import ChoiceColor from "./ChoiceColor";
import {apolloClient} from "../index";
import {gql} from "@apollo/client";
import {useParams} from "react-router-dom";

// const GET_CARD = gql`
//     query Product($productId: String!) {
//         product(id: $productId) {
//             id
//             name
//             inStock
//             gallery
//             description
//             category
//             prices {
//                 amount
//                 currency {
//                     symbol
//                     label
//                 }
//             }
//             brand
//             attributes {
//                 id
//                 name
//                 type
//                 items {
//                     id
//                     value
//                     displayValue
//                 }
//             }
//         }
//     }
// `;

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class PDP extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: [this.renderPDP],
            // product: []
        }
    }

    renderPDP = async () => {
        try {
            const result = await apolloClient
            .query({
                query: gql`
                    query Product($productId: String!) {
                        product(id: $productId) {
                            id
                            name
                            inStock
                            gallery
                            description
                            category
                            prices {
                                amount
                                currency {
                                    symbol
                                    label
                                }
                            }
                            brand
                            attributes {
                                id
                                name
                                type
                                items {
                                    id
                                    value
                                    displayValue
                                }
                            }
                        }
                    }
                `, variables: {productId: this.props.match.params['cardId'].substring(1)}
            });
            const product = result.data.product;
            const attributes = result.data.product.attributes[0].items

            this.setState({
                product: product,
                attributes: attributes
            });

        } catch (err) {
            console.log(err);
        }
    };

    //
    componentDidMount() {
        this.renderPDP();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.product !== this.state.product) {
            console.log('it was Changed')
            // this.renderPDP();
            // this.setState({
            //     product: this.state.product
            // })
        }
    }

    render() {

        // const card = ({productId}) => {
        //     apolloClient
        //         .query({query: GET_CARD, variables: {productId}})
        //         .then((res) => {
        //             console.log(res)
        //         })
        // }
        console.log(this.state.product.description)
        let description = this.state.product.description
        // console.log(this.state.product.id)
        console.log(this.state.product.attributes)
        // console.log(this.state.attributes)
        let attributes = this.state.attributes
        // const sizes = attributes[0]
        // console.log(sizes)
        return (
            <main className={styles.container}>
                <section className={styles.blockImg}>
                    <img className={styles.blockImgItem} src="" alt="img1"/>
                    <img className={styles.blockImgItem} src="" alt="img2"/>
                    <img className={styles.blockImgItem} src="" alt="img3"/>
                </section>
                <section className={styles.blockGroup}>
                    <img className={styles.groupImg} src="" alt="img main"/>
                    <div className={styles.groupChoice}>
                        <div><GroupTitle/></div>
                        <div className={styles.choiceSize}>
                            <ul>
                                {/*{attributes &&*/}
                                {/*    attributes.map((size, id) => (*/}
                                {/*            <li key={id} className={styles.sizeItem}>{size.value}</li>*/}
                                {/*        )*/}
                                {/*    )*/}
                                {/*}*/}
                            </ul>
                            <ChoiceSize product={this.state.product}
                                        attributes={attributes}/>
                        </div>
                        <div className={styles.choiceColor}><ChoiceColor/></div>
                        <div className={styles.groupChoicePrice}>
                            <h5 className={styles.h5}>PRICE:</h5>
                            <div className={styles.price}>$50.00</div>
                        </div>
                        <button className={styles.button}>ADD TO CART</button>
                        <p className={styles.description}>
                            {description}
                        </p>
                    </div>
                </section>
            </main>
        )
    }
}

export default withRouter(PDP)