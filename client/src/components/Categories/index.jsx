import React from "react";
import styles from './Categories.module.css'
import {AppContext} from "../AppContext"

class Categories extends React.PureComponent {
    render() {
        const {onClick} = this.props
        const {productCards, activeCategory} = this.context

        return (
            <div>
                <ul className={styles.categories}>
                    {
                        productCards &&
                        productCards.map((category, index) => (
                            <li onClick={() => onClick(index)}
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

Categories.contextType = AppContext;

export default Categories