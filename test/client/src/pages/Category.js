import React from "react";
import styles from "./Category.module.css"
import ProductCard from "../components/ProductCard";
import {Link} from "react-router-dom";

class Category extends React.Component {
    render() {
        // console.log(this.props)
        const {productCards, activeItem} = this.props
        // console.log(productCards[0].products[0].id)

        let cards = productCards[activeItem].products?.map((product) => (
            <Link to={`/ ${product.id}`}>
                <ProductCard
                    key={product.id}
                    product={product}
                    activeCurrency={this.props.activeCurrency}
                />
            </Link>
        ))

        return (
            <main className={styles.container}>
                <h1 className={styles.title}>{productCards[activeItem].name}</h1>
                <section className={styles.productCards}>
                    <div className={styles.grid}>
                        {cards}
                    </div>
                </section>
            </main>
        )
    }
}

export default Category;


