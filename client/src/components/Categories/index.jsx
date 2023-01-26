import React from "react";
import styles from './Categories.module.css'

import {connect} from "react-redux";
import { onSelectCategories } from "../../redux/categories/slice";

class Categories extends React.PureComponent {
    render() {
        const {onSelectCategories, productCards, activeCategory} = this.props

        return (
            <div>
                <ul className={styles.categories}>
                    {
                        productCards &&
                        productCards.map((category, index) => (
                            <li onClick={() => onSelectCategories(index)}
                                key={`${category.name}_${index}`}
                                className={`${styles.categoriesItem} 
                                ${activeCategory === index ? styles.active : ''}`}>
                                {category.name}
                            </li>))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  productCards: state.categories.productCards,
  activeCategory: state.categories.activeCategory,
});

const mapDispatchToProps = { onSelectCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);