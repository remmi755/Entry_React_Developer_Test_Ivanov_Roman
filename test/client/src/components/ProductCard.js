import React from "react";
import styles from "./ProductCard.module.css"
import Title from "./Title"
import Image from "./Image"

class ProductCard extends React.Component {
    render() {
        const {activeCurrency} = this.props
        const {name, gallery, prices, inStock} = this.props.product;
        let symbol = prices[activeCurrency].currency.symbol
        let amount = prices[activeCurrency].amount
// console.log(this.props.product)
        // console.log(prices[activeCurrency])
        // console.log(prices)
        // console.log(activeCurrency)
        return (
            <div className={styles.container}>
                <div className={styles.blockImg}>
                    {/*<img className={styles.img} src={gallery[0]} alt="Photo product"/>*/}
                    <Image
                        className={styles.img}
                        // style={gallery[0].width < 354? {objectFit:'fill'}:{objectFit: 'contain'}}
                        width={354}
                        height={330}
                        alt={name}
                        src={gallery[0]}
                    />
                    {inStock ? "" : (<Title className={styles.stock}>OUT OF STOCK</Title>)}
                </div>
                <div className={styles.content}>
                    <Title className={styles.title}>{name}</Title>
                    <div className={styles.price}>Price: {symbol} {amount}</div>
                </div>
            </div>
        )
    }
};

export default ProductCard