import React from "react";
import {useQuery, gql, useApolloClient, ApolloClient, InMemoryCache} from '@apollo/client';
import styles from "./ProductCard.module.css"
import Title from "./Title"

import {apolloClient} from "./../index"


// const CARDS = gql`
//     query GetCards($productId: String!) {
//         categories {
//             name
//             products {
//                 id
//                 name
//                 inStock
//                 gallery
//                 description
//                 category
//                 brand
//             }
//         }
//         category {
//             name
//         }
//         product(id: $productId) {
//             id
//             name
//             inStock
//             gallery
//             description
//             category
//             attributes {
//                 id
//                 name
//                 type
//                 items {
//                     displayValue
//                     value
//                     id
//                 }
//             }
//             prices {
//                 currency {
//                     label
//                     symbol
//                 }
//                 amount
//             }
//             brand
//         }
//         currencies {
//             label
//             symbol
//         }
//     }
// `;

class ProductCard extends React.Component {
    render() {
//         const { products} = this.props.categories;
//         console.log(this.props)
        const {activeCurrency} = this.props
        const {name, category, gallery, id, prices} = this.props.product;
        let symbol = prices[activeCurrency].currency.symbol
        let amount = prices[activeCurrency].amount

        return (
            <div className={styles.container}>
                <div className={styles.blockImg}>
                    <img className={styles.img} src={gallery[0]} alt="Photo product"/>
                </div>
                <div className={styles.content}>
                    <Title className={styles.title}>{name}</Title>
                    {/*<div className={styles.price}>Price: {prices[activeCurrency].currency.symbol} {prices[activeCurrency].amount}</div>*/}
                    <div className={styles.price}>Price: {symbol} {amount}</div>
                </div>
            </div>
        )
    }
};

export default ProductCard