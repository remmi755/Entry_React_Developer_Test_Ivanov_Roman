import React from "react";
import {Route, Routes, useParams} from "react-router-dom";
import {Category, Header} from "./components"
import Cart from "./components/Cart";
import {apolloClient} from "./index";
import {gql} from "@apollo/client";
import PDP from "./components/Pdp";
import {AppContext} from "./components/AppContext"

// export function withRouter(Children) {
//     return (props) => {
//         const match = {params: useParams()};
//         return <Children {...props} match={match}/>
//     }
// }

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
            activeAttributeInd: 0,
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
        const {currencies} = this.state
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
        // console.log(product.attributes[0].items)
        // console.log(this.state.activeAttribute)
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
        if (product.id === id) {
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

    onSelectAttribute = (attribute, id, index) => {
        if (attribute.id === id) {
            this.setState({
                activeAttributeInd: index,
                activeAttribute: attribute,
            })
        }
    }

    render() {
        let totalPrice = (this.state.cartList.reduce((prev, curr) => {
            return prev + curr.prices[this.state.activeCurrency].amount * curr.count
        }, 0)).toFixed(2)

        let totalCount = this.state.cartList.reduce((prev, curr) => {
            return prev + curr.count
        }, 0)

        // let newArr = this.state.productCards.slice()
        // console.log(newArr)
        // console.log(this.state.cartList)
        // let {activeItem}= this.state
        // console.log(this.state.productCards[activeItem].products)
        // console.log(this.props.match.params['cardId'].substring(1))
        // console.log(this.state.productCards[0].products[0])

        const {
            productCards,
            activeCurrency,
            cartList,
            count,
            currencies,
            activeItem,
            selectedCurrency,
            total,
            openPopup,
            modalShow,
            activeAttribute,
            activeAttributeInd
        } = this.state
        const {deleteCartItem, countIncrease, countDecrease, onSelectAttribute, onHidePopup,
            onSelectCategories, onOpenPopup, onSelectCurrencies, toggleModal, onAddToCart} = this;

        return (
            <AppContext.Provider
                value={{
                    totalCount, modalShow,
                    totalPrice, productCards, activeCurrency, currencies, openPopup,
                    cartList, count, activeItem, selectedCurrency, total, activeAttribute, activeAttributeInd,
                    deleteCartItem, countIncrease, countDecrease, onSelectAttribute, onHidePopup,
                    onSelectCategories, onOpenPopup, onSelectCurrencies, toggleModal, onAddToCart
                }}
            >
                <div>
                    <Header
                        onOpenPopup={this.onOpenPopup}
                    />
                    <Routes>
                        <Route path="/" element={<Category/>}/>
                        <Route path="/cart" element={<Cart
                            activeCurrency={this.state.activeCurrency}
                            cartList={this.state.cartList}
                        />}
                        />
                        <Route path="/:cardId" element={<PDP
                            // productCards={this.state.productCards}
                            // activeItem={this.state.activeItem}
                            activeCurrency={this.state.activeCurrency}
                            // onAddToCart={this.onAddToCart}
                            // onSelectAttribute={this.onSelectAttribute}
                            // activeAttribute={this.state.activeAttribute}
                            // activeAttributeInd={this.state.activeAttributeInd}
                        />}
                        />
                    </Routes>
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;

