import React from "react";
import styles from "./Category.module.css";
import ProductCard from "../../components/ProductCard";
import Title from "../../components/Title";

import {connect} from "react-redux";

class Category extends React.PureComponent {
  render() {
    const { activeCategory, productCards } = this.props;

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
    );
  }
}

const mapStateToProps = (state) => ({
  productCards: state.categories.productCards,
  activeCategory: state.categories.activeCategory,
});

export default connect(mapStateToProps)(Category);

