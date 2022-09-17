import React from "react";
import styles from "./Category.module.css"
import ProductCard from "../components/ProductCard";
import CartOverlay from "../components/CartOverlay"
import Title from "../components/Title"
import Modal from "../components/Modal"
import {Link} from "react-router-dom";

class Category extends React.Component {

    // openModal = () => {
    //     this.state = {
    //         activeCartOverlay: true
    //     }
    // }
    render() {
        const {productCards, activeItem, activeCurrency, totalCount,
            totalPrice, cartList, countIncrease, countDecrease,modalShow}  = this.props
        console.log(modalShow)
        // const cards = productCards[activeItem].products?.map((product) => (
        //     <Link to={`/ ${product.id}`}>
        //         <ProductCard
        //             key={product.id}
        //             product={product}
        //             activeCurrency={activeCurrency}
        //         />
        //     </Link>
        // ))

        return (
            <div >
                <div className={`${styles.container} 
                 
                 `}>
                    {/*<div className={modalShow? styles.modal: ""}></div>*/}
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
                                        />
                                    </Link>
                                ))
                            }
                            {/*{cards}*/}
                        </div>
                    </section>
                    <div className={styles.containerCartOverlay}>
                        <Modal className={modalShow? document.body.style.overflow = "hidden":document.body.style.overflow = ""}
                            show={modalShow}
                            close={() => {
                                this.setState({
                                    modalShow: false
                                })
                            }}
                        >
                            {/*<section className={styles.containerCartOverlay}>*/}
                                <CartOverlay totalCount={totalCount}
                                             totalPrice={totalPrice}
                                             cartList={cartList}
                                             activeCurrency={activeCurrency}
                                             countIncrease={countIncrease}
                                             countDecrease={countDecrease}
                                />
                            {/*</section>*/}
                        </Modal >
                    </div>

                    {/*{*/}
                    {/*    modalShow? (*/}
                    {/*        <section className={styles.containerCartOverlay}>*/}
                    {/*            <CartOverlay totalCount={totalCount}*/}
                    {/*                         totalPrice={totalPrice}*/}
                    {/*                         cartList={cartList}*/}
                    {/*                         activeCurrency={activeCurrency}*/}
                    {/*                         countIncrease={countIncrease}*/}
                    {/*                         countDecrease={countDecrease}*/}

                    {/*            />*/}
                    {/*        </section>*/}
                    {/*    ): null*/}
                    {/*}*/}

                </div>

                {/*<CartOverlay totalCount={totalCount}*/}
                {/*             totalPrice={totalPrice}*/}
                {/*             cartList={cartList}*/}
                {/*             activeCurrency={activeCurrency}*/}
                {/*             countIncrease={countIncrease}*/}
                {/*             countDecrease={countDecrease}*/}

                {/*             activeCartOverlay={this.state.activeCartOverlay}*/}
                {/*/>*/}
            </div>

        )
    }
}

export default Category;


