import React from "react";
import styles from "./Category.module.css"
import ProductCard from "../components/ProductCard";
import CartOverlay from "../components/CartOverlay"
import Title from "../components/Title"
import Modal from "../components/Modal"
import {Link} from "react-router-dom";
import {AppContext} from "../components/AppContext"

class Category extends React.Component {
    render() {
        const {productCards, activeItem, cartList, modalShow, toggleModal}  = this.context

        return (
            <div>
                <div className={`${styles.container} 
                 `}>
                    <Title className={styles.title}>{productCards[activeItem].name}</Title>
                    <section className={styles.productCards}>
                        <div className={styles.grid}>
                            {
                                productCards[activeItem].products?.map((product) => (
                                    <Link to={`/ ${product.id}`}>
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
                        <Modal
                            className={modalShow ? document.body.style.overflow = "hidden" :
                                document.body.style.overflow = ""}
                            close={toggleModal}
                            shown={modalShow}
                        >
                            <CartOverlay/>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

Category.contextType = AppContext;

export default Category;


