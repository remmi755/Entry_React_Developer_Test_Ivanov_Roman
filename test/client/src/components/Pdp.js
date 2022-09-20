import React from "react";
import styles from "./Pdp.module.css"
import Title from "./Title"
import Button from "./Button"
import Attributes from "./Attributes";
import {apolloClient} from "../index";
import {gql} from "@apollo/client"
import {useParams} from "react-router-dom";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class PDP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [this.renderPDP],
        }
    }

    renderPDP = async () => {
        try {
            const result = await apolloClient
            .query({
                query: gql`
                    query Product($productId: String!) {
                        product(id: $productId) {
                            id
                            name
                            inStock
                            gallery
                            description
                            category
                            prices {
                                amount
                                currency {
                                    symbol
                                    label
                                }
                            }
                            brand
                            attributes {
                                id
                                name
                                type
                                items {
                                    id
                                    value
                                    displayValue
                                }
                            }
                        }
                    }
                `, variables: {productId: this.props.match.params['cardId'].substring(1)}
            });

            const product = result.data.product;
            const attributes = result.data.product.attributes
            const allAttributes = result.data.product.attributes
            let prices = result.data.product.prices[this.props?.activeCurrency].amount
            // let prices = result.data.product?.prices
            let symbol = result.data.product.prices[this.props.activeCurrency].currency.symbol

            this.setState({
                product: product,
                attributes: attributes,
                allAttributes: allAttributes,
                prices: prices,
                symbol: symbol
            });

        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount() {
        this.renderPDP();
    }

    render() {
        // console.log(this.onAddToCart(this.props.cart))
        // console.log(this.props)
        // console.log(this.props.orders)

const{ onAddToCart} = this.props

        const{product, attributes, prices, symbol}= this.state
// console.log(product)
        const newProduct = {...product, count : 1}
        // console.log(newProduct)

        let description = `${product.description}`.replace(/(\<(\/?[^>]+)>)/g, '')

        return (
            <main className={styles.container}>
                <section className={styles.blockImg}>
                    {product.gallery &&
                        product.gallery.map((img, id) => (
                            <img key={id} className={styles.blockImgItem} src={img} alt="imgGallery"/>
                        ))
                    }
                </section>
                <section className={styles.blockGroup}>
                    <img className={styles.groupImg} src={product.gallery} alt="imgMain"/>
                    <div className={styles.groupChoice}>
                        <Title className={styles.titleBrand}>{product.brand}</Title>
                        <Title className={styles.titleName}>{product.name}</Title>
                        <div className={styles.attributes}>
                            <Attributes product={product}
                                        attributes={attributes}
                                        activeAttribute={this.props.activeAttribute}
                                        onSelectAttributes={this.props.onSelectAttributes}
                                        attributeName={styles.attributeName}
                                        attributeSize={styles.attributeSize}
                                        attributeColor={styles.attributeColor}
                            />
                        </div>
                        <div className={styles.groupChoicePrice}>
                            <h5 className={styles.h5}>PRICE:</h5>
                            <div className={styles.price}>
                                {symbol}{prices}
                            </div>
                        </div>
                        <Button className={styles.button} onClick={() => onAddToCart(product)}>ADD TO CART</Button>
                        <p className={styles.description}>
                            {description}
                        </p>
                    </div>
                </section>
            </main>
        )
    }
}

export default withRouter(PDP)