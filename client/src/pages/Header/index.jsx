import React from "react";
import {ReactComponent as HeaderLogo} from '../../assets/SVG/headerLogo.svg';
import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import Categories from "../../components/Categories";
import Actions from "../../components/Actions"
import {AppContext} from "../../components/AppContext"


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