import React from "react";
import styles from "./CartItem.module.css"
import GroupTitle from "./GroupTitle";
import ChoiceSize from "./ChoiseSize";
import ChoiceColor from "./ChoiceColor";

class CartItem extends React.Component {
    render() {
        return(
            <main className={styles.container}>
                <section>
                    <div><GroupTitle /></div>
                    <p className={styles.price}>$50.00</p>
                    <div className={styles.choiceSize}><ChoiceSize /></div>
                    <div className={styles.choiceColor}><ChoiceColor /></div>
                </section>
                <section className={styles.groupImg}>
                    <div className={styles.sum}>
                        <div className={styles.sumItem}>+</div>
                        <div className={`${styles.sumItem} ${styles.borderNone}`}>1</div>
                        <div className={styles.sumItem}>-</div>
                    </div>
                        <img className={styles.img} src="" alt="photo item"/>
                </section>
            </main>
        )
    }
};

export default CartItem;