import React from "react";
import {Route, Routes, useParams} from "react-router-dom";
import {Category, Header} from "./components"
import Cart from "./components/Cart";
import {apolloClient} from "./index";
import {gql} from "@apollo/client";
import PDP from "./components/Pdp";
// import {useParams} from "react-router-dom";

// export function withRouter(Children) {
//     return (props) => {
//         const match = {params: useParams()};
//         return <Children {...props} match={match}/>
//     }
// }

export const MyContext = React.createContext("");
console.log(MyContext)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productCards: [this.renderCards],
            activeItem: 0,
            products: [this.renderCards],
            openPopup: false,
            activeCurrency: 0,
            selectedCurrency: '$',
            orders: [],
            activeAttribute: 0,
            // count: 1,
        }
    }

    renderCards = async () => {
        try {
            const result = await apolloClient
            .query({
                query: gql`
                    query Query {
                        categories {
                            name
                            products {
                                id
                                name
                                category
                                prices {
                                    currency {
                                        symbol
                                    }
                                    amount
                                }
                                brand
                                attributes {
                                    items {
                                        id
                                        value
                                        displayValue
                                    }
                                    id
                                    name
                                    type
                                }
                                inStock
                                gallery
                                description
                            }
                        }
                    }
                `
            });
            const categories = result.data.categories;
            const currenciesList = result.data.categories[this.state.activeItem].products[0].prices

            this.setState({
                productCards: categories,
                currencies: currenciesList
            });

        } catch (err) {
            console.log(err);
        }
    }

    // renderPDP = async () => {
    //     try {
    //         const result = await apolloClient
    //         .query({
    //             query: gql`
    //                 query Product($productId: String!) {
    //                     product(id: $productId) {
    //                         id
    //                         name
    //                         inStock
    //                         gallery
    //                         description
    //                         category
    //                         prices {
    //                             amount
    //                             currency {
    //                                 symbol
    //                                 label
    //                             }
    //                         }
    //                         brand
    //                         attributes {
    //                             id
    //                             name
    //                             type
    //                             items {
    //                                 id
    //                                 value
    //                                 displayValue
    //                             }
    //                         }
    //                     }
    //                 }
    //             `, variables: {productId: this.props.match.params['cardId'].substring(1)}
    //         });
    //         const product = result.data.product
    //         const attributes = result.data.product.attributes
    //         const allAttributes = result.data.product.attributes
    //         const prices = result.data.product.prices[0].amount
    //
    //         this.setState({
    //             product: product,
    //             attributes: attributes,
    //             allAttributes: allAttributes,
    //             prices: prices,
    //         });
    //
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    componentDidMount() {
        this.renderCards();
        // this.renderPDP();
        window.scrollTo(0, 0);
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.productCards !== this.state.productCards) {
        }
    }

    onSelectCategories = index => {
        this.setState({
            activeItem: index,
        })
    }

    onSelectCurrencies = (index, e) => {
        this.setState({
            activeCurrency: index,
            selectedCurrency: e.target.innerText,
            // selectedCurrency: this.props.currencies[this.state.activeCurrency].currency.symbol,
            openPopup: false,
        })
    }

    onSelectAttributes = (index) => {
        alert(index)
        // this.setState({
        //     activeAttribute: index,
        // })
    }

    onOpenPopup = () => {
        this.setState({openPopup: !this.state.openPopup})
    }

    // countIncrease = (id) => {
    //
    //     console.log(id)
    //
    //     // this.setState((orders) => {
    //     //
    //     //     return (
    //     //
    //     //         orders.map((product) => {
    //     //             if (product.id === id) {
    //     //                 return {
    //     //                     ...product,
    //     //                     count: this.state.count + 1
    //     //                 }
    //     //             }
    //     //         })
    //     //     )
    //     //
    //     // })
    //
    //
    //
    //     // this.setState((orders) => {
    //     //
    //     //     return orders.map((product) => {
    //     //
    //     //         if(product.id === id) {
    //     //             return {
    //     //                 ...product,
    //     //                 count: ++product.count
    //     //             }
    //     //         }
    //     //
    //     //         return product
    //     //     })
    //     //
    //     // })
    //
    // }



    countDecrease =(id) => {
        this.setState({
            count: this.state.count - 1
        })
    }

    onAddToCart = (product) => {
        this.setState({
            orders : [...this.state.orders, product]
        })
    }

    render() {
        // let {activeItem}= this.state
        // console.log(this.state.productCards[activeItem].products)
        // console.log(this.state.priceses)
        // console.log(this.state.currenciesList)
        // console.log(this.props.match.params['cardId'].substring(1))
        // console.log(this.state.productCards[0].products[0])
        return (
            <div>
                {/*<h2>My first Apollo app 🚀</h2>*/}
                <Header onClick={this.onSelectCategories}
                        onOpenPopup={this.onOpenPopup}
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}
                        currencies={this.state.currencies}

                        openPopup={this.state.openPopup}
                        activeCurrency={this.state.activeCurrency}
                        selectedCurrency={this.state.selectedCurrency}
                        onSelectCurrencies={this.onSelectCurrencies}
                />
                <Routes>
                    <Route path="/" element={<Category
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}
                        activeCurrency={this.state.activeCurrency}
                    />}
                    />
                    <Route path="/cart" element={<Cart
                        productCards={this.state.productCards}
                        activeCurrency={this.state.activeCurrency}
                        orders={this.state.orders}
                        count={this.state.count}
                        countIncrease={this.countIncrease}
                        countDecrease={this.countDecrease}
                        activeItem={this.state.activeItem}


                    />}
                    />
                    <Route path="/:cardId" element={<PDP
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}
                        activeCurrency={this.state.activeCurrency}
                        activeAttribute={this.state.activeAttribute}

                        orders={this.state.orders}
                        onAddToCart={this.onAddToCart}
                        onSelectAttributes={this.onSelectAttributes}

                    />}
                    />
                </Routes>
            </div>
        );
    }
}

export default App;

