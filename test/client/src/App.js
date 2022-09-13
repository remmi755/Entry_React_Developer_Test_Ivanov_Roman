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
            cartList: [],
            activeAttribute: 0,
            // count: 1,
            // total:{
            //     totalPrice: (this.state.cartList.reduce((prev, curr) => {
            //         return prev + curr.prices[this.props.activeCurrency].amount * curr.count
            //     }, 0)).toFixed(2),
            //     totalCount: this.state.cartList.reduce((prev, curr) => {
            //         return prev + curr.count
            //     }, 0)
            // }
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

    componentDidMount() {
        this.renderCards();
        // this.renderPDP();
        // window.scrollTo(0, 0);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.productCards !== this.state.productCards) {
    //     }
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.count !== this.state.count ||
    //         prevState.activeCurrency !== this.state.activeCurrency) {
    //         console.log(this.state.cartList)
    //         this.setState({
    //             total:{
    //                 totalPrice: (this.state.cartList.reduce((prev, curr) => {
    //                     return prev + curr.prices[this.state.activeCurrency].amount * curr.count
    //                 }, 0)).toFixed(2),
    //                 totalCount: this.state.cartList.reduce((prev, curr) => {
    //                     return prev + curr.count
    //                 }, 0)
    //             }
    //         })
    //     }
    // }

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

    onAddToCart = (product) => {
        const {cartList} = this.state
        const newProduct = {...product, count: 1};
        let isInCart = false;

        cartList.forEach((el) => {
            if (el.id === newProduct.id) {
                isInCart = true;

                this.setState({
                    count: ++el.count
                })
            }
        })
        if (!isInCart)
            this.setState({
                cartList: [...cartList, newProduct]
            })

        // const newProduct = {...product, count : 1}
        // this.setState({
        //     cartList: [...cartList, newProduct]
        // })
    }

    deleteCartItem = (id) => {
        const {cartList} = this.state

        this.setState({
            cartList: cartList.filter(el => el.id !== id)
        })
    }

    render() {
        console.log(this.state.cartList)
        let totalPrice = (this.state.cartList.reduce((prev, curr) => {
                    return prev + curr.prices[this.state.activeCurrency].amount * curr.count
                }, 0)).toFixed(2)

            let totalCount = this.state.cartList.reduce((prev, curr) => {
                return prev + curr.count
            }, 0)

        console.log(totalCount)
        // let {activeItem}= this.state
        // console.log(this.state.productCards[activeItem].products)
        // console.log(this.state.selectedCurrency)
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
                        totalCount={totalCount}
                        totalPrice={totalPrice}
                        cartList={this.state.cartList}
                    />}
                    />
                    <Route path="/cart" element={<Cart
                        productCards={this.state.productCards}
                        activeCurrency={this.state.activeCurrency}
                        cartList={this.state.cartList}
                        count={this.state.count}
                        // countIncrease={this.countIncrease}
                        countDecrease={this.countDecrease}
                        activeItem={this.state.activeItem}
                        deleteCartItem={this.deleteCartItem}
                        selectedCurrency={this.state.selectedCurrency}
                        total={this.state.total}



                    />}
                    />
                    <Route path="/:cardId" element={<PDP
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}
                        activeCurrency={this.state.activeCurrency}
                        activeAttribute={this.state.activeAttribute}

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

