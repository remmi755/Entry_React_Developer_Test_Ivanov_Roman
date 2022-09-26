import React from "react";
import styles from "./Category.module.css"
import ProductCard from "../components/ProductCard";
import CartOverlay from "../components/CartOverlay"
import Title from "../components/Title"
import Modal from "../components/Modal"
import {Link} from "react-router-dom";

class Category extends React.Component {
    render() {
        const {productCards, activeItem, activeCurrency, totalCount,isInCart,
            totalPrice, cartList, countIncrease, countDecrease,modalShow, onHidePopup, toggleModal}  = this.props

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
                                            activeCurrency={activeCurrency}
                                            cartList={cartList}
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
                            <CartOverlay totalCount={totalCount}
                                         totalPrice={totalPrice}
                                         cartList={cartList}
                                         activeCurrency={activeCurrency}
                                         countIncrease={countIncrease}
                                         countDecrease={countDecrease}
                                         onHidePopup={onHidePopup}
                            />
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;


