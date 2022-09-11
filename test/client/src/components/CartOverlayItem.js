import React from "react";
import styles from "./CartOverlayItem.module.css"
import Title from "./Title";

class CartOverlayItem extends React.Component {
    render() {
        console.log(this.props.cartItem)
        const{cartItem, id} = this.props
        console.log(cartItem)
        return(
            <main className={styles.container}>
                <section className={styles.content}>
                    <Title className={styles.titleCartOverlay}>{cartItem.name}</Title>
                    <Title className={styles.titleCartOverlay}>{cartItem.brand}</Title>
                    {
                        // cartItem.attributes.map((attribute, id) => (
                        //
                        // ))
                    }
                    {/*<GroupTitle cartItem={cartItem}*/}
                    {/*            brand={cartItem.brand}*/}
                    {/*name={cartItem.name}/>*/}
                    <p className={styles.price}>$50.00</p>
                    {/*<div className={styles.groupChoiceSize}>*/}
                    {/*    <h5 className={styles.h5}>size:</h5>*/}
                    {/*    <div className={styles.choiceSize}>*/}
                    {/*        <div className={styles.choiceSizeItem}>XS</div>*/}
                    {/*        <div className={`${styles.choiceSizeItem} ${styles.activeSize}`}>S</div>*/}
                    {/*        <div className={styles.choiceSizeItem}>M</div>*/}
                    {/*        <div className={styles.choiceSizeItem}>L</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={styles.groupChoiceColor}>*/}
                    {/*    <h5 className={styles.h5}>color:</h5>*/}
                    {/*    <div className={styles.choiceColor}>*/}
                    {/*        <div className={`${styles.choiceColorItem} ${styles.colorItem1}`}></div>*/}
                    {/*        <div className={`${styles.choiceColorItem} ${styles.colorItem2}`}></div>*/}
                    {/*        <div className={`${styles.choiceColorItem} ${styles.colorItem3}`}></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </section>
                <div className={styles.sum}>
                    <div className={styles.sumItem}>+</div>
                    <div className={`${styles.sumItem} ${styles.borderNone}`}>1</div>
                    <div className={styles.sumItem}>-</div>
                </div>
                <div className={styles.img}>
                    <img src="" alt="photo item"/>
                </div>
            </main>
        )
    }
}

export default CartOverlayItem