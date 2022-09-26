import React from "react";
import {ReactComponent as HeaderLogo} from '../SVG/headerLogo.svg';
import {ReactComponent as HeaderBasket} from '../SVG/headerBasket.svg';
import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import Categories from "./Categories";
import Actions from "./Actions";
import {AppContext} from "../App"

class Header extends React.Component {
// static contextType = AppContext
    render() {
        // const context = React.useContext(AppContext)
        // const {onSelectCategories} = this.context
        const{onSelectCategories, productCards, activeItem, categories, onSelectCurrencies,onOpenPopup,
            currencies, totalCount, openPopup, activeCurrency, selectedCurrency, toggleModal, } = this.props
        // console.log(this.props.activeItem)
        // console.log(this.props.categories)
        return (
            <div className={styles.container}>
                <Link to="/">
                    <div className={styles.navigation}>
                        <Categories
                            onClick={(index) => {
                                onSelectCategories(index)
                            }}
                            productCards={productCards}
                            activeItem={activeItem}
                            categories={categories}
                        />
                    </div>
                </Link>
                <div className={styles.logo}>
                    <HeaderLogo/>
                </div>

                    <Actions
                             onSelectCurrencies={onSelectCurrencies}
                             onOpenPopup={onOpenPopup}
                             productCards={productCards}
                             activeItem={activeItem}
                             currencies={currencies}
                             totalCount={totalCount}
                             openPopup={openPopup}
                             activeCurrency={activeCurrency}
                             selectedCurrency={selectedCurrency}
                             toggleModal={toggleModal}
                             // useClickOutside={this.props.useClickOutside}
                    />
            </div>
        )
    }
}

export default Header;