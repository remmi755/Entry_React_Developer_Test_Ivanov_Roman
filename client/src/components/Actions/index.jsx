import React from "react";
import { ReactComponent as VectorDown } from "../../assets/SVG/VectorCurrency.svg";
import { ReactComponent as VectorUp } from "../../assets/SVG/VectorUp.svg";
import { ReactComponent as CartQuantity } from "../../assets/SVG/cartQuantity.svg";
import styles from "./Actions.module.css";
import { ReactComponent as HeaderBasket } from "../../assets/SVG/headerBasket.svg";
import Currencies from "../Currencies";

import { AppContext } from "../AppContext";
import { connect } from "react-redux";
import { onOpenPopup } from "../../redux/currencies/slice";
import { toggleModal } from "../../redux/modal/slice";

export const actionsRef = React.createRef();
export const separatorRef = React.createRef();
export const basketRef = React.createRef();

class Actions extends React.PureComponent {
  render() {
    const { totalCount } = this.context;
    const { currencies, activeCurrency, openPopup, toggleModal, onOpenPopup } =
      this.props;

    return (
      <div className={styles.actions}>
        <span
          ref={actionsRef}
          className={styles.popupClosed}
          onClick={onOpenPopup}
        >
          {activeCurrency ? currencies[activeCurrency].currency.symbol : "$"}
          <span className={styles.vector}>
            {openPopup ? <VectorUp /> : <VectorDown />}
          </span>
        </span>
        <span ref={separatorRef} className={styles.separator}></span>
        {openPopup && <Currencies />}
        <div className={styles.cart} onClick={toggleModal} ref={basketRef}>
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
            style={totalCount > 9 ? { left: 65 } : { left: 69 }}
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

const mapStateToProps = (state) => ({
  currencies: state.currencies.currencies,
  activeCurrency: state.currencies.activeCurrency,
  openPopup: state.currencies.openPopup,
});

const mapDispatchToProps = { onOpenPopup, toggleModal };

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
