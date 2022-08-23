import React from "react";
import {Route, Routes} from "react-router-dom";
import {Category, Header} from "./components"
import Cart from "./components/Cart";
import {apolloClient} from "./index";
import {gql} from "@apollo/client";
import PDP from "./components/Pdp";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productCards: [this.renderCards],
            activeItem: 0,
            products: [this.renderCards],
            // press: [this.renderCards],
            // // prices: [this.renderPrices]
            // prices: this.renderPrices
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
            // const press = result.data.categories[0].products[0].prices[1].amount
            const categories = result.data.categories;
            this.setState({
                productCards: categories,
                // press: press
            });

        } catch (err) {
            console.log(err);
        }
        ;
    }

    // renderPrices = async () => {
    //     try {
    //         const result = await apolloClient
    //         .query({
    //             query: gql`
    //                 query Product {
    //                     category {
    //                         name
    //                         products {
    //                             id
    //                             name
    //                             prices {
    //                                 amount
    //                                 currency {
    //                                     label
    //                                     symbol
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             `
    //         });
    //
    //         const prices = result.data.category.products[0].prices[0].amount;
    //
    //         this.setState({
    //             prices: prices
    //
    //         });
    //
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     ;
    // }

    componentDidMount() {
        this.renderCards();
        // this.renderPrices()
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.productCards !== this.state.productCards) {
            // console.log(this.state)
            // this.setState({
            //     productCards: this.categories[2]
            // });
            // this.onSelectCategories()
        }
    }

    clickOnButton = () => {
        alert(123)
    }

    onSelectCategories = index => {
        this.setState({
            activeItem: index,
        })
    }

    render() {
        // console.log(this.state)
        // console.log(this.state.productCards[0].products)
        // console.log(this.state.productCards)
        // console.log(this.state.categories)
        // console.log(this.state.prices)
        // console.log(this.state.press)
        // console.log(this.state.activeItem)
        // console.log(this.state.categories[0].products)
        return (
            <div>
                <h2>My first Apollo app 🚀</h2>
                <Header onClick={this.onSelectCategories}
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}
                />
                {/*<PDP/>*/}
                <Routes>
                    <Route path="/" element={<Category
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}/>}
                    />
                    <Route path="/cart" element={<Cart
                        onClick={this.clickOnButton}
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}/>}
                    />
                    <Route path="/:cardId" element={<PDP
                        /*<Route path={`/card/ ${this.id}`} element={<PDP*/
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}
                        // cardId={this.state.cardId}
                    />}
                    />
                </Routes>
            </div>
        );
    }
}

export default App;

