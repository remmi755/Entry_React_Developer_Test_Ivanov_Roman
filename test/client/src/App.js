import React from "react";
import {Route, Routes} from "react-router-dom";
import Category from "./pages/Category"
import Header from "./pages/Header"
import Cart from "./pages/Cart";
import {apolloClient} from "./index";
import {gql} from "@apollo/client";
import PDP from "./pages/Pdp";
import {AppContext} from "./components/AppContext"
import Modal from "./components/Modal"
import CartOverlay from "./components/CartOverlay"

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
    }

    onSelectCategories = index => {
        this.setState({
            activeItem: index,
        })
    }

    onSelectCurrencies = (index) => {
        const {currencies} = this.state
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
        const {cartList, activeAttribute} = this.state
        let newProduct = {}
// console.log(className= "")
//         if (activeAttribute)
        if (product.inStock ) {
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
        console.log(attribute)
        console.log(id)
        console.log(index)
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
                    <Header onOpenPopup={this.onOpenPopup}/>
                    <Routes>
                        <Route path="/" element={<Category/>}/>
                        <Route path="/cart" element={<Cart
                            activeCurrency={this.state.activeCurrency}
                            cartList={this.state.cartList}
                        />}
                        />
                        <Route path="/:cardId" element={<PDP
                            activeCurrency={this.state.activeCurrency}
                        />}
                        />
                    </Routes>
                    <Modal
                        className={modalShow ? document.body.style.overflow = "hidden" :
                            document.body.style.overflow = ""}
                        close={toggleModal}
                        shown={modalShow}
                    >
                        <CartOverlay/>
                    </Modal>
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;

