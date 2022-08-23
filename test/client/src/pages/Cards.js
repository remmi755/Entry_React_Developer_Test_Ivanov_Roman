import React from 'react';
import {useQuery, gql} from '@apollo/client';


/** TRACKS gql query to retreive all tracks */
/** TRACKS query to retrieve all tracks */

const QUERYALL2 = gql`
    query Query($productId: String!) {
        categories {
            name
            products {
                id
                name
                inStock
                gallery
                description
                category
                brand
            }
        }
        category {
            name
        }
        product(id: $productId) {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
                id
                name
                type
                items {
                    displayValue
                    value
                    id
                }
            }
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }
            brand
        }
        currencies {
            label
            symbol
        }
    }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const productId = "jacket-canada-goosee"

// const Cards = () => {
//
//     const { loading, error, data } = useQuery(QUERYALL2, {variables: {productId}});
//
//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;
// console.log(data)
//     // return <div>{JSON.stringify(data)}</div>
//
//
//     return (
//         <div className={styles.grid}>
//             {data?.categories[0].products?.map(product => (
//                 <ProductCard key={product.id} product={product} category={category}/>
//             ))}
//     {/*//         <ProductCard key={productId} product={product} />*/}
//     {/*               <Category />*/}

//     // //         {/*<Headers name={this.name} category={this.category}/>*/}
//         </div>
//     )
//
// };

// export default Cards;
