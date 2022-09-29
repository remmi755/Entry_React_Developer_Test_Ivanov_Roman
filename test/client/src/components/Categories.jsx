import React from "react";
import styles from './Categories.module.css'
import {AppContext} from "./AppContext"

class Categories extends React.Component {
    render() {
        const {onClick} = this.props
        const {productCards, activeItem} = this.context

        return (
            <div>
                <ul className={styles.categories}>
                    {
                        productCards &&
                        productCards.map((category, index) => (
                            <li onClick={() => onClick(index)}
                                key={`${category.name}_${index}`}
                                className={`${styles.categoriesItem} 
                                ${activeItem === index ? styles.active : ''}`}>
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