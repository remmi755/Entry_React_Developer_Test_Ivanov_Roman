import React from "react";
import styles from "../pages/Category.module.css"
import ProductCard from "../components/ProductCard";
import Title from "../components/Title"
import {Link} from "react-router-dom";
import {AppContext} from "../components/AppContext"

class Category extends React.Component {
    render() {
        const {productCards, activeItem, cartList}  = this.context

        return (
            <div>
                <div className={`${styles.container} 
                 `}>
                    <Title className={styles.title}>{productCards[activeItem].name}</Title>
                    <section className={styles.productCards}>
                        <div className={styles.grid}>
                            {
                                productCards[activeItem].products?.map((product) => (
                                    <Link key={product.name} to={`/ ${product.id}`}>
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            isInCart={cartList.some(obj => obj.id === product.id)}
                                        />
                                    </Link>
                                ))
                            }
                        </div>
                    </section>
                    <div className={styles.containerCartOverlay}>
                    </div>
                </div>
            </div>
        )
    }
}

Category.contextType = AppContext;

export default Category;


