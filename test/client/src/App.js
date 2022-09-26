import React from "react";
import {Route, Routes, useParams} from "react-router-dom";
import {Category, Header} from "./components"
import Cart from "./components/Cart";
import {apolloClient} from "./index";
import {gql} from "@apollo/client";
import PDP from "./components/Pdp";
import styles from "./App.css"
// import {useParams} from "react-router-dom";

// export function withRouter(Children) {
//     return (props) => {
//         const match = {params: useParams()};
//         return <Children {...props} match={match}/>
//     }
// }

// export const AppContext = React.createContext("");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInCart: false,
            modalShow: false,
            count: 1,
            productCards: [this.renderCards],
            activeItem: 0,
            products: [this.renderCards],
            openPopup: false,
            activeCurrency: 0,
            selectedCurrency: '$',
            cartList: [],
            activeAttribute: 0,
            total: {
                totalPrice: 0,
                totalCount: 0
            }
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
                                        label
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
        // window.scrollTo(0, 0);
    }

    onSelectCategories = index => {
        this.setState({
            activeItem: index,
        })
    }

    onSelectCurrencies = (index, e) => {
        const{currencies}= this.state
        // console.log(index)
        this.setState({
            activeCurrency: index,
            selectedCurrency: currencies[index].currency.symbol,
            openPopup: false,
        })
    }

    onOpenPopup = () => {
        this.setState({openPopup: !this.state.openPopup})
    }

    onAddToCart = (product) => {
        const {cartList} = this.state
        let newProduct = {}

        if (product.inStock) {
            newProduct = {...product, count: 1}
        }

        let isInCart = false;

        cartList.forEach((el) => {
            if (el.id === newProduct.id) {
                isInCart = true;
                this.setState({
                    count: ++el.count,
                })
            }
        })

        if (!isInCart && product.inStock)
            this.setState({
                cartList: [...cartList, newProduct],
            })
    }

    deleteCartItem = (id) => {
        const {cartList} = this.state

        this.setState({
            cartList: cartList.filter(el => el.id !== id)
        })
    }

    countIncrease = (product, id) => {
        if(product.id === id) {
            this.setState({
                count: ++product.count
            })
        }
    }

    countDecrease = (product, id) => {
        if (product.id === id) {
            this.setState({
                count: product.count - 1 > 0 ? --product.count : this.deleteCartItem(id),
            })
        }
    }

    toggleModal = () => {
        this.setState({
            modalShow: !this.state.modalShow
        })
}

    onHidePopup = () => {
        document.body.style.overflow = "";
        this.setState({
            modalShow: false
        })
    }

    render() {
        let totalPrice = (this.state.cartList.reduce((prev, curr) => {
            return prev + curr.prices[this.state.activeCurrency].amount * curr.count
        }, 0)).toFixed(2)

        let totalCount = this.state.cartList.reduce((prev, curr) => {
            return prev + curr.count
        }, 0)

        // let inCart = this.state.cartList.inCart
        // console.log(inCart)

        // let newArr = this.state.productCards.slice()
        // console.log(newArr)
        // console.log(this.state.cartList)
        // let {activeItem}= this.state
        // console.log(this.state.productCards[activeItem].products)
        // console.log(this.props.match.params['cardId'].substring(1))
        // console.log(this.state.productCards[0].products[0])
        return (
            // <AppContext.Provider
            //     value={this.onSelectCategories}
            // >
                <div>
                    <Header
                        onSelectCategories={this.onSelectCategories}
                        onOpenPopup={this.onOpenPopup}
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}
                        currencies={this.state.currencies}
                        totalCount={totalCount}
                        openPopup={this.state.openPopup}
                        activeCurrency={this.state.activeCurrency}
                        selectedCurrency={this.state.selectedCurrency}
                        onSelectCurrencies={this.onSelectCurrencies}
                        toggleModal={this.toggleModal}
                        useClickOutside={this.useClickOutside}

                    />
                    <Routes>
                        <Route path="/" element={<Category
                            productCards={this.state.productCards}
                            activeItem={this.state.activeItem}
                            activeCurrency={this.state.activeCurrency}
                            totalCount={totalCount}
                            totalPrice={totalPrice}
                            cartList={this.state.cartList}
                            countIncrease={this.countIncrease}
                            countDecrease={this.countDecrease}
                            modalShow={this.state.modalShow}
                            onHidePopup={this.onHidePopup}
                            toggleModal={this.toggleModal}
                            // isInCart={this.state.isInCart}
                        />}
                        />
                        <Route path="/cart" element={<Cart
                            productCards={this.state.productCards}
                            activeCurrency={this.state.activeCurrency}
                            cartList={this.state.cartList}
                            count={this.state.count}
                            activeItem={this.state.activeItem}
                            deleteCartItem={this.deleteCartItem}
                            selectedCurrency={this.state.selectedCurrency}
                            total={this.state.total}
                            countIncrease={this.countIncrease}
                            countDecrease={this.countDecrease}
                            totalCount={totalCount}
                            totalPrice={totalPrice}
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
            // </AppContext.Provider>

        );
    }
}

export default App;

