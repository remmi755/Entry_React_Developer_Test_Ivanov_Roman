import React from "react";
import styles from "./Category.module.css"
import ProductCard from "../components/ProductCard";
import CartOverlay from "../components/CartOverlay"
import Title from "../components/Title"
import {Link} from "react-router-dom";

class Category extends React.Component {
    render() {
        // console.log(this.props)
        const {productCards, activeItem, activeCurrency, totalCount, cartList}  = this.props
        // console.log(productCards[0].products[0].id)

        let cards = productCards[activeItem].products?.map((product) => (
            <Link to={`/ ${product.id}`}>
                <ProductCard
                    key={product.id}
                    product={product}
                    activeCurrency={activeCurrency}
                />
            </Link>
        ))

        return (
            <>
                <main className={styles.container}>
                    <Title className={styles.title}>{productCards[activeItem].name}</Title>
                    <section className={styles.productCards}>
                        <div className={styles.grid}>
                            {cards}
                        </div>
                    </section>
                </main>
                <CartOverlay totalCount={totalCount}
                             cartList={cartList}/>
            </>

        )
    }
}

export default Category;


