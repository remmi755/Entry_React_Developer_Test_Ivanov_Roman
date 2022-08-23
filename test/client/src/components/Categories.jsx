import React from "react";
import styles from './Categories.module.css'

class Categories extends React.Component {

    render() {
        // console.log(this.props)
        const {productCards, activeItem, categories, onClick} = this.props
        // console.log(productCards)
        // console.log(this.props.activeItem)
        // console.log(this.state.productCard)
        return (
            <div>
                <ul className={styles.categories}>
                    {
                        productCards &&
                        productCards.map((category, index) => (
                            <li onClick={() => onClick(index)}
                                key={`${category.name}_${index}`}
                                className={`${styles.categoriesItem} 
                                ${this.props.activeItem === index ? styles.active : ''}`}>
                                {category.name}
                            </li>))
                    }
                </ul>
            </div>
        )
    }
}

export default Categories