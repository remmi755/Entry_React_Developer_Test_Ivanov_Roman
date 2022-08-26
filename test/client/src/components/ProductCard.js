import React from "react";
import {useQuery, gql, useApolloClient, ApolloClient, InMemoryCache} from '@apollo/client';
import styles from "./ProductCard.module.css"
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
//
//         const { products} = this.props.categories;
//         console.log(this.props.product)
        const {name, category, gallery, id, prices} = this.props.product;

        // console.log(prices)
        return (
            <div className={styles.container}>
                <div className={styles.blockImg}>
                    <img className={styles.img} src={gallery[0]} alt="Photo product"/>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>{name}</div>
                    <div className={styles.price}>Price: {prices[0].currency.symbol}{prices[0].amount}</div>
                </div>
            </div>
        )
    }
};

// class ProductCard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state= {
//             product: props.product,
//
//         }
//     }
//
//     render() {
//         const { name, category, gallery, prices} = this.props.product;
//         console.log(this.name)
//         return(
//             <div className={styles.container}>
//                 <div className={styles.blockImg}>
//                     <img className={styles.img} src={gallery[0]} alt="Photo product"/>
//                 </div>
//                 <div className={styles.content}>
//                     <div className={styles.title}>Title:{name}</div>
//                     <div className={styles.price}>Price: {category}</div>
//                 </div>
//             </div>
//         )
//     }
// };

export default ProductCard