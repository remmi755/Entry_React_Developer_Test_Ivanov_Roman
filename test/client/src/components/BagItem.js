import React from "react";
import styles from "./BagItem.module.css"
import GroupTitle from "./GroupTitle";
import Title from "./Title";
import Label from "./Label"

class BagItem extends React.Component {
    render() {
        console.log(this.props.cartItem)
        const{cartItem, id} = this.props
        return(
            <main className={styles.container}>
                <section className={styles.content}>
                    <Title className={styles.titleCart}>{cartItem.name}</Title>
                    <Label className={styles.labelCart}>{cartItem.brand}</Label>
                    {/*<GroupTitle cartItem={cartItem}*/}
                    {/*            brand={cartItem.brand}*/}
                    {/*name={cartItem.name}/>*/}
                    {/*<p className={styles.title}>Apollo</p>*/}
                    {/*<p className={styles.label}>Running Short</p>*/}
                    <p className={styles.price}>$50.00</p>
                    <div className={styles.groupChoiceSize}>
                        <h5 className={styles.h5}>size:</h5>
                        <div className={styles.choiceSize}>
                            <div className={styles.choiceSizeItem}>XS</div>
                            <div className={`${styles.choiceSizeItem} ${styles.activeSize}`}>S</div>
                            <div className={styles.choiceSizeItem}>M</div>
                            <div className={styles.choiceSizeItem}>L</div>
                        </div>
                    </div>
                    <div className={styles.groupChoiceColor}>
                        <h5 className={styles.h5}>color:</h5>
                        <div className={styles.choiceColor}>
                            <div className={`${styles.choiceColorItem} ${styles.colorItem1}`}></div>
                            <div className={`${styles.choiceColorItem} ${styles.colorItem2}`}></div>
                            <div className={`${styles.choiceColorItem} ${styles.colorItem3}`}></div>
                        </div>
                    </div>
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

export default BagItem