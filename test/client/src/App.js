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
            activeCategory: 0,
            products: [this.renderCards],
            openPopup: false,
            activeCurrency: 0,
            selectedCurrency: '$',
            cartList: this.getCartFromLS(),
            activeAttributeItem: 0,
            activeAttributeIndex: 0,
            activeAttribute: '',
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
            const currenciesList = result.data.categories[this.state.activeCategory].products[0].prices

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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            // console.log('Ok')
        }
    }

    getCartFromLS = () => {
        const data = localStorage.getItem('cart')
        return data ? JSON.parse(data) : [];
    }

    onSelectCategories = index => {
        this.setState({
            activeCategory: index,
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

    // onSelectAttribute = ( attribute, id, el, index) => {
    onSelectAttribute = (attribute, el, index) => {
        // if(attribute.id === id) {
            this.setState({
                activeAttributeIndex: index,
                activeAttribute: attribute,
                activeAttributeItem: attribute.items[index]
            })
        // }

        // console.log(this.state.cartList)
        // console.log(id)
        // console.log(el)
        // console.log(index)
        // console.log(attribute.items[index])
    }

    onAddToCart = (product) => {
        const {cartList, activeAttribute, activeAttributeItem, activeAttributeIndex} = this.state;

        let newProduct;
        // console.log(activeAttributeItem)
        // console.log(cartList)
        // console.log(product)
        // console.log(newProduct)
    if (!product.isInCart && product.inStock) {
        newProduct = {
            attributes: product.attributes,
            activeAttribute: activeAttribute,
            activeAttributeItem: activeAttributeItem,
            activeAttributeIndex: activeAttributeIndex,
            brand: product.brand,
            prices: product.prices,
            gallery: product.gallery,
            id: product.id,
            inStock: product.inStock,
            name: product.name,
            count: 1,
            isInCart: false
        }
    }

        cartList.forEach((el) => {
            // if (el.id === newProduct.id ) {
            if (el.id === newProduct.id ) {
                newProduct.isInCart = true;
                // this.setState({
                //     count: ++el.count,
                // })
            }
        })
        if (!newProduct.isInCart && newProduct.inStock) {
            // console.log("out")
            newProduct.isInCart = true
            localStorage.setItem('cart', JSON.stringify([...cartList, newProduct]))
            this.setState({
                cartList: JSON.parse(localStorage.getItem('cart')),
            })
        } else if (newProduct.isInCart) {
            // console.log("in");
            cartList.forEach((el, index, arr) => {
                if (el.activeAttributeItem.id !== newProduct.activeAttributeItem.id) {
                    // console.log("!==")
                    // console.log(el.activeAttributeItem)
                    // console.log(newProduct.activeAttributeItem)

                    // this.setState({
                    //     count: ++el.count,
                    // })

                    localStorage.setItem('cart', JSON.stringify([...cartList, newProduct]))
                    this.setState({
                        cartList: JSON.parse(localStorage.getItem('cart')),
                    })
                } else if (el.activeAttributeItem.id === newProduct.activeAttributeItem.id) {
                    // console.log("===")
                    // console.log(el.activeAttributeItem)
                    // console.log(newProduct.activeAttributeItem)

                    this.setState({
                        count: ++newProduct.count,
                        // cartList: JSON.parse(localStorage.getItem('cart')),
                    })
                    // console.log(el.count)
                    // console.log(newProduct.count)
                    // console.log(this.state.count)
                    newProduct = {...newProduct, count: ++el.count}
                    localStorage.setItem('cart', JSON.stringify(cartList))
                    this.setState({
                        cartList: JSON.parse(localStorage.getItem('cart')),
                    })
                  arr.length = index + 1
                    // return false;
                }

            })
        }


        // if (product.inStock && !product.isInCart) {
        //     newProduct = {
        //         attributes: product.attributes,
        //         activeAttribute: activeAttribute,
        //         activeAttributeItem: activeAttributeItem,
        //         activeAttributeIndex: activeAttributeIndex,
        //         brand: product.brand,
        //         prices: product.prices,
        //         gallery: product.gallery,
        //         id: product.id,
        //         inStock: product.inStock,
        //         name: product.name,
        //         count: 1,
        //         isInCart: false
        //     }
        //
        // }
        // // console.log(newProduct)
        //
        // cartList.forEach((el) => {
        //     // if (el.id === newProduct.id ) {
        //     if (el.id === newProduct.id ) {
        //         newProduct.isInCart = true;
        //         // this.setState({
        //         //     count: ++el.count,
        //         // })
        //     }
        // })
        // // console.log(newProduct)
        // // console.log(cartList)
        //
        // if (newProduct.isInCart && newProduct.inStock) {
        //     console.log("in")
        //     // newProduct.isInCart = true;
        //     cartList.forEach((el) => {
        //         console.log(el)
        //         if(el.activeAttributeItem.id !== newProduct.activeAttributeItem.id) {
        //             console.log("!==")
        //             console.log(el.activeAttributeItem)
        //             console.log(newProduct.activeAttributeItem)
        //
        //             // this.setState({
        //             //     count: ++el.count,
        //             // })
        //
        //             localStorage.setItem('cart', JSON.stringify([...cartList, newProduct]))
        //             this.setState({
        //                 cartList: JSON.parse(localStorage.getItem('cart')),
        //             })
        //         } else if(el.activeAttributeItem.id === newProduct.activeAttributeItem.id) {
        //
        //             console.log("===")
        //             console.log(el.activeAttributeItem)
        //             console.log(newProduct.activeAttributeItem)
        //             //
        //             // this.setState({
        //             //     count: ++this.state.count,
        //             // })
        //
        //             this.setState({
        //                 count: ++newProduct.count,
        //             })
        //             newProduct = {...newProduct, count: ++el.count}
        //             // console.log(this.state.count)
        //             // localStorage.setItem('cart', JSON.stringify([...cartList,{...newProduct, count: ++el.count}]))
        //             localStorage.setItem('cart', JSON.stringify([...cartList,newProduct]))
        //             // this.setState({
        //             //     cartList: JSON.parse(localStorage.getItem('cart')),
        //             // })
        //             // this.setState({
        //             //     count: ++this.state.count,
        //             // })
        //             //
        //             // let newProductChanged = {...newProduct, count: this.state.count}
        //             //
        //             // cartList.forEach((el) => {
        //             //     if (el.id === newProduct.id) {
        //             //         newProduct = newProductChanged
        //             //     }
        //             // })
        //
        //             // localStorage.setItem('cart', JSON.stringify(cartList))
        //         }
        //     })
        //     // this.setState({
        //     //     count: ++this.state.count,
        //     // })
        //     //
        //     // let newProductChanged = {...newProduct, count: this.state.count}
        //     //
        //     // cartList.forEach((el) => {
        //     //     if (el.id === newProduct.id) {
        //     //         newProduct = newProductChanged
        //     //     }
        //     // })
        //
        //     // localStorage.setItem('cart', JSON.stringify(cartList))
        //
        // } else if (!newProduct.isInCart && newProduct.inStock) {
        //     console.log("out")
        //     newProduct.isInCart = true
        //     localStorage.setItem('cart', JSON.stringify([...cartList, newProduct]))
        //     this.setState({
        //         cartList: JSON.parse(localStorage.getItem('cart')),
        //     })
        // }
    }

    deleteCartItem = (product, id) => {
        const {cartList} = this.state
        const index = cartList.findIndex(x => x.id === id
            && x.activeAttributeItem.id === product.activeAttributeItem.id);
        cartList.splice(index,1)
        localStorage.setItem('cart',JSON.stringify(cartList))
    }

    countIncrease = (product, id) => {
        const {cartList} = this.state

        if (product.id === id) {
            this.setState({
                count: ++product.count,
            })
        }

        let newProductChanged = {...product, count: ++this.state.count}

        cartList.forEach((el) => {
            if (el.id === product.id) {
                product = newProductChanged
            }
        })
        localStorage.setItem('cart', JSON.stringify(cartList))
    }

    countDecrease = (product, id) => {
        const {cartList} = this.state

        if (product.id === id) {
            this.setState({
                count: product.count - 1 > 0 ? --product.count : this.deleteCartItem(product, id),
            })
        }

        let newProductChanged = {...product, count: --this.state.count}

        cartList.forEach((el) => {
            if (el.id === product.id) {
                product = newProductChanged
            }
        })
        localStorage.setItem('cart', JSON.stringify(cartList))
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

        // console.log(this.state.cartList)
        // console.log(this.state.activeAttribute)

        const {
            productCards,
            activeCurrency,
            cartList,
            count,
            currencies,
            activeCategory,
            selectedCurrency,
            total,
            openPopup,
            modalShow,
            activeAttributeItem,
            activeAttribute,
            activeAttributeIndex
        } = this.state
        const {deleteCartItem, countIncrease, countDecrease, onHidePopup, onSelectAttribute, getCartFromLS,
            onSelectCategories, onOpenPopup, onSelectCurrencies, toggleModal, onAddToCart} = this;

        // console.log(activeAttribute)
        // console.log(activeAttributeItem)

        return (
            <AppContext.Provider
                value={{
                    totalCount, modalShow,
                    totalPrice, productCards, activeCurrency, currencies, openPopup, activeAttributeIndex,
                    cartList, count, activeCategory, selectedCurrency, total, activeAttributeItem,  activeAttribute,
                    deleteCartItem, countIncrease, countDecrease, onHidePopup, onSelectAttribute, getCartFromLS,
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

// if (product.inStock && !product.isInCart) {
//     newProduct = {
//         attributes: product.attributes,
//         activeAttribute: activeAttribute,
//         activeAttributeItem: activeAttributeItem,
//         activeAttributeIndex: activeAttributeIndex,
//         brand: product.brand,
//         prices: product.prices,
//         gallery: product.gallery,
//         id: product.id,
//         inStock: product.inStock,
//         name: product.name,
//         count: 1,
//         isInCart: false
//     }
//
// }
// // console.log(newProduct)
//
// cartList.forEach((el) => {
//     // if (el.id === newProduct.id ) {
//     if (el.id === newProduct.id ) {
//         newProduct.isInCart = true;
//         // this.setState({
//         //     count: ++el.count,
//         // })
//     }
// })
// // console.log(newProduct)
// // console.log(cartList)
//
// if (newProduct.isInCart && newProduct.inStock) {
//     console.log("in")
//     // newProduct.isInCart = true;
//     cartList.forEach((el) => {
//         console.log(el)
//         if(el.activeAttributeItem.id !== newProduct.activeAttributeItem.id) {
//             console.log("!==")
//             console.log(el.activeAttributeItem)
//             console.log(newProduct.activeAttributeItem)
//
//             // this.setState({
//             //     count: ++el.count,
//             // })
//
//             localStorage.setItem('cart', JSON.stringify([...cartList, newProduct]))
//             this.setState({
//                 cartList: JSON.parse(localStorage.getItem('cart')),
//             })
//         } else if(el.activeAttributeItem.id === newProduct.activeAttributeItem.id) {
//
//             console.log("===")
//             console.log(el.activeAttributeItem)
//             console.log(newProduct.activeAttributeItem)
//             //
//             // this.setState({
//             //     count: ++this.state.count,
//             // })
//
//             this.setState({
//                 count: ++newProduct.count,
//             })
//             newProduct = {...newProduct, count: ++el.count}
//             // console.log(this.state.count)
//             // localStorage.setItem('cart', JSON.stringify([...cartList,{...newProduct, count: ++el.count}]))
//             localStorage.setItem('cart', JSON.stringify([...cartList,newProduct]))
//             // this.setState({
//             //     cartList: JSON.parse(localStorage.getItem('cart')),
//             // })
//             // this.setState({
//             //     count: ++this.state.count,
//             // })
//             //
//             // let newProductChanged = {...newProduct, count: this.state.count}
//             //
//             // cartList.forEach((el) => {
//             //     if (el.id === newProduct.id) {
//             //         newProduct = newProductChanged
//             //     }
//             // })
//
//             // localStorage.setItem('cart', JSON.stringify(cartList))
//         }
//     })
//     // this.setState({
//     //     count: ++this.state.count,
//     // })
//     //
//     // let newProductChanged = {...newProduct, count: this.state.count}
//     //
//     // cartList.forEach((el) => {
//     //     if (el.id === newProduct.id) {
//     //         newProduct = newProductChanged
//     //     }
//     // })
//
//     // localStorage.setItem('cart', JSON.stringify(cartList))
//
// } else if (!newProduct.isInCart && newProduct.inStock) {
//     console.log("out")
//     newProduct.isInCart = true
//     localStorage.setItem('cart', JSON.stringify([...cartList, newProduct]))
//     this.setState({
//         cartList: JSON.parse(localStorage.getItem('cart')),
//     })
// }