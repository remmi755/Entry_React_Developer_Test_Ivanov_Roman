import React from "react";
import styles from "./Category.module.css"
import ProductCard from "../../components/ProductCard";
import Title from "../../components/Title"
import {AppContext} from "../../components/AppContext"

class Category extends React.PureComponent {
    render() {
        const {productCards, activeCategory}  = this.context

        return (
            <div>
                <div className={`${styles.container} 
                 `}>
                    <Title className={styles.title}>{productCards[activeCategory].name}</Title>
                    <section className={styles.productCards}>
                        <div className={styles.grid}>
                            {
                                productCards[activeCategory].products?.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
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


