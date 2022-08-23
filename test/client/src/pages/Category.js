import React from "react";
import styles from "./Category.module.css"
import ProductCard from "../components/ProductCard";
import {Link} from "react-router-dom";

class Category extends React.Component {


    render() {
        // console.log(this.props)
        const {productCards, activeItem} = this.props
        // console.log(productCards[0].products[0].id)

        let cards = productCards[activeItem].products?.map(product => (
            <Link to={`/ ${product.id}`}>
                <ProductCard key={product.id} product={product}/>
            </Link>
        ))

        return (
            <main className={styles.container}>
                <h1 className={styles.title}>{productCards[activeItem].name}</h1>
                <section className={styles.productCards}>
                    {/*<Link to="/card/:cardId">*/}


                    <div className={styles.grid}>
                        {cards}
                    </div>
                    {/*</Link>*/}
                </section>
            </main>
        )
    }
}

export default Category;


// class Category extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             productCards: [],
//         }
//     }
//
//     componentDidMount() {
//         this.renderCards()
//     }
//
//     renderCards = async () => {
//         try {
//             const result = await apolloClient
//             .query({
//                 query: gql`
//                     query Query {
//                         categories {
//                             name
//                             products {
//                                 id
//                                 name
//                                 inStock
//                                 gallery
//                                 description
//                                 category
//                                 brand
//                             }
//                         }
//                     }
//                 `
//             });
//
//             const cards = result.data.categories[0];
//
//             this.setState({
//                 productCards: cards
//             });
//
//         } catch (err) {
//             console.log(err);
//         }
//         ;
//     }
//
//     render() {
//         const cards = this.state.productCards.products?.map(product => (
//             <ProductCard key={product.id} product={product}/>
//         ))
//
//         return (
//             <main className={styles.container}>
//                 <Header />
//                 <h1 className={styles.title}>{this.state.productCards.name}</h1>
//                 <section className={styles.productCards}>
//                     <div className={styles.grid}>
//                         {cards}
//                     </div>
//                 </section>
//             </main>
//         )
//     }
// }
