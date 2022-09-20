import React from "react";
import {ReactComponent as HeaderLogo} from '../SVG/headerLogo.svg';
import {ReactComponent as HeaderBasket} from '../SVG/headerBasket.svg';
import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import Categories from "./Categories";
import Actions from "./Actions";

class Header extends React.Component {

    render() {
        // console.log(this.props.activeItem)
        // console.log(this.props.categories)
        return (
            <div className={styles.container}>
                <Link to="/">
                    <div className={styles.navigation}>
                        <Categories
                            onClick={(index) => {
                                this.props.onClick(index)
                            }}
                            productCards={this.props.productCards}
                            activeItem={this.props.activeItem}
                            categories={this.props.categories}
                        />
                    </div>
                </Link>
                <div className={styles.logo}>
                    <HeaderLogo/>
                </div>

                    <Actions
                             onSelectCurrencies={this.props.onSelectCurrencies}
                             onOpenPopup={this.props.onOpenPopup}
                             productCards={this.props.productCards}
                             activeItem={this.props.activeItem}
                             currencies={this.props.currencies}
                             totalCount={this.props.totalCount}
                             openPopup={this.props.openPopup}
                             activeCurrency={this.props.activeCurrency}
                             selectedCurrency={this.props.selectedCurrency}
                             toggleModal={this.props.toggleModal}
                    />
            </div>
        )
    }
}

export default Header;