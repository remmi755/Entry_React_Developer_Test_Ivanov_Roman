import React from "react";
import { ReactComponent as HeaderLogo } from "../../assets/SVG/headerLogo.svg";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Categories from "../../components/Categories";
import Actions from "../../components/Actions";

class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.navigation}>
          <Link to="/">
          <Categories />
          </Link>
        </div>
        <div className={styles.logo}>
          <Link to="/">
            <HeaderLogo />
          </Link>
        </div>
        <Actions />
      </div>
    );
  }
}

export default Header;


