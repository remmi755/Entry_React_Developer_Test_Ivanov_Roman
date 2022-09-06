import React from "react";
import styles from "./CartItem.module.css"
import GroupTitle from "./GroupTitle";
import Attributes from "./Attributes";

class CartItem extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state= {
    //         count: 1,
    //     }
    // }

    // countIncrease = (product, id) => {
    //     console.log(id)
    //     console.log(product.id)
    //     console.log(this.props.count)
    //
    //
    //     if (product.id === id) {
    //         this.setState({
    //             count: this.props.count + 1,
    //         })
    //     }


        // this.setState((orders) => {
        //
        //     return orders.map((product) => {
        //
        //         if(product.id === id) {
        //             return {
        //                 ...product,
        //                 count: ++product.count
        //             }
        //         }
        //
        //         return product
        //     })
        //
        // })

    // }


    render() {

        const{orderItem, activeCurrency, countDecrease, id , count, countIncrease} = this.props
        let amount = orderItem.prices[activeCurrency].amount;
        let symbol = orderItem.prices[activeCurrency].currency.symbol
        // console.log(id)
        return(
            <main className={styles.container}>
                <section>
                    <div>
                        <GroupTitle
                            brand={orderItem.brand}
                            name={orderItem.name}
                        />
                    </div>
                    <p className={styles.price}>{symbol}{amount}</p>
                    <div className={styles.choiceSize}>
                        <Attributes
                            attributes={orderItem.attributes}
                            attributesId={orderItem.attributes.id}
                        />
                    </div>
                </section>
                <section>
                    {/*<div><GroupTitle /></div>*/}
                    {/*<p className={styles.price}>$50.00</p>*/}
                    {/*<div className={styles.choiceSize}><ChoiceSize /></div>*/}
                    {/*<div className={styles.choiceColor}><ChoiceColor /></div>*/}
                </section>
                <section className={styles.groupImg}>
                    <div className={styles.sum}>
                        <button className={styles.sumItem} onClick={() => countIncrease(id)}>+</button>
                        <div className={`${styles.sumItem} ${styles.borderNone}`}>{count}</div>
                        <button className={styles.sumItem} onClick={() => countDecrease(orderItem.id)}>-</button>
                    </div>
                    <img className={styles.img} src={orderItem.gallery[0]} alt="photo item"/>
                </section>
            </main>
        )
    }
};

export default CartItem;