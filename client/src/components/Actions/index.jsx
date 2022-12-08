import React from "react";
import { ReactComponent as VectorDown } from "../../assets/SVG/VectorCurrency.svg";
import { ReactComponent as VectorUp } from "../../assets/SVG/VectorUp.svg";
import { ReactComponent as CartQuantity } from "../../assets/SVG/cartQuantity.svg";
import styles from "./Actions.module.css";
import { ReactComponent as HeaderBasket } from "../../assets/SVG/headerBasket.svg";
import Currencies from "../Currencies";
import { AppContext } from "../AppContext";

class Actions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef(null);
  }

  handleClickOutside = ({ target }) => {
    if (this.ref.current && !this.ref.current.contains(target)) {
      this.props.onOpenPopup();
      this.setState({
        openPopup: false
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const {
      currencies,
      activeCurrency,
      openPopup,
      onOpenPopup,
      toggleModal,
      totalCount
    } = this.context;

    return (
      <div className={styles.actions}>
        <span className={styles.popupClosed} onClick={onOpenPopup}>
          {activeCurrency ? currencies[activeCurrency].currency.symbol : "$"}
          <span>{openPopup ? <VectorUp /> : <VectorDown />}</span>
        </span>
        <span className={styles.separator}></span>
        {openPopup && <Currencies />}
        <div className={styles.cart} onClick={toggleModal}>
          <HeaderBasket />
        </div>
        {totalCount ? (
          <div className={styles.cartQuantity}>
            <CartQuantity />
          </div>
        ) : (
          ""
        )}
        {totalCount ? (
          <span
            className={styles.quantity}
            style={totalCount > 9 ? { left: 54.5 } : { left: 59 }}
          >
            {totalCount}
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }
}

Actions.contextType = AppContext;

export default Actions;
