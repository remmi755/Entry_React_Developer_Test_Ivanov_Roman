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
            // const prices = result.data.product.prices[0].amount

            this.setState({
                productCards: categories,
                // prices: prices
            });

        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.renderCards();
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.productCards !== this.state.productCards) {
            // console.log(this.state)
            // this.setState({
            //     productCards: this.categories[2]
            // });
        }
    }

    clickOnButton = () => {
        alert(123)
    }

    updateData = (value) => {
        this.setState({
            prices: value
        })
    }

    onSelectCategories = index => {
        this.setState({
            activeItem: index,
        })
    }

    render() {
        // console.log(this.state.productCards[0].products[0])
        return (
            <div>
                {/*<h2>My first Apollo app 🚀</h2>*/}
                <Header onClick={this.onSelectCategories}
                        clickOnButton={this.clickOnButton}
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}
                />
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
                        productCards={this.state.productCards}
                        activeItem={this.state.activeItem}
                        updateData={this.updateData}
                        // prices={this.state.prices}
                    />}
                    />
                </Routes>
            </div>
        );
    }
}

export default App;

