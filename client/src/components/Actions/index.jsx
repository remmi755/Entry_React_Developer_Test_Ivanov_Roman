import React from "react";
import { ReactComponent as VectorDown } from "../../assets/SVG/VectorCurrency.svg";
import { ReactComponent as VectorUp } from "../../assets/SVG/VectorUp.svg";
import { ReactComponent as CartQuantity } from "../../assets/SVG/cartQuantity.svg";
import styles from "./Actions.module.css";
import { ReactComponent as HeaderBasket } from "../../assets/SVG/headerBasket.svg";
import { AppContext } from "../AppContext";

class Actions extends React.Component {
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
      onSelectCurrencies,
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
        {openPopup && (
          <div>
            <ul className={styles.blockCurrencies} ref={this.ref}>
              {currencies?.map((item, index) => (
                <li
                  key={`${item} ${index}`}
                  onClick={(e) => onSelectCurrencies(index, e)}
                  className={`${styles.actionsItem}  
                                            ${
                    activeCurrency === index
                      ? styles.active
                      : ""
                  }`}
                >
                  <div>{item.currency.symbol}</div>
                  <div>{item.currency.label}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
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
