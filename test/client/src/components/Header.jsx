import React from "react";
import {ReactComponent as HeaderLogo} from '../SVG/headerLogo.svg';
import {ReactComponent as HeaderBasket} from '../SVG/headerBasket.svg';
import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import Categories from "./Categories";
import Actions from "./Actions"
import {AppContext} from "./AppContext"


class Header extends React.Component {
    render() {
        const {onSelectCategories, onOpenPopup} = this.context

        return (
            <div className={styles.container}>
                <Link to="/">
                    <div className={styles.navigation}>
                        <Categories
                            onClick={(index) => {
                                onSelectCategories(index)
                            }}
                        />
                    </div>
                </Link>
                <div className={styles.logo}>
                    <HeaderLogo/>
                </div>
                <Actions
                    onOpenPopup={onOpenPopup}
                />
            </div>
        )
    }
}

Header.contextType = AppContext;

export default Header;