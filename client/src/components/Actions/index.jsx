import React from "react";
import { ReactComponent as VectorDown } from "../../assets/SVG/VectorCurrency.svg";
import { ReactComponent as VectorUp } from "../../assets/SVG/VectorUp.svg";
import { ReactComponent as CartQuantity } from "../../assets/SVG/cartQuantity.svg";
import styles from "./Actions.module.css";
import { ReactComponent as HeaderBasket } from "../../assets/SVG/headerBasket.svg";
import Currencies from "../Currencies";

import { AppContext } from "../AppContext";
import {connect} from "react-redux";
import { onOpenPopup, onClosePopup, setCurrencies } from "../../redux/currencies/slice";
import { toggleModal } from "../../redux/modal/slice";



class Actions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef(null);
  }

  handleClickOutside = ({ target }) => {
    if (this.ref.current && !this.ref.current.contains(target)) {
      this.props.onOpenPopup();
      // this.props.onClosePopup(false);
      // this.setState({
      //   openPopup: false
      // });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const { totalCount } = this.context;

    const {currencies, activeCurrency, openPopup,  toggleModal, onOpenPopup} = this.props

    return (
      <div className={styles.actions}>
        <span className={styles.popupClosed} onClick={onOpenPopup}>
          {activeCurrency ? currencies[activeCurrency].currency.symbol : "$"}
          <span className={styles.vector}>{openPopup ? <VectorUp /> : <VectorDown />}</span>
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

const mapDispatchToProps = { onOpenPopup, onClosePopup, toggleModal };

export default connect(mapStateToProps, mapDispatchToProps )(Actions);