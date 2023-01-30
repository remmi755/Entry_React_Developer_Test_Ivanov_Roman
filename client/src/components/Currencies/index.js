import React from "react";
import styles from "./Currencies.module.css";

import { connect } from "react-redux";
import { onOpenPopup, onSelectCurrencies } from "../../redux/currencies/slice";
import { actionsRef } from "../Actions";

export const currenciesRef = React.createRef();

class Currencies extends React.PureComponent {
  handleClickOutside = ({ target }) => {
    if (
      currenciesRef.current &&
      !currenciesRef.current.contains(target) &&
      actionsRef.current &&
      !actionsRef.current.contains(target)
    ) {
      this.props.onOpenPopup();
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  render() {
    const { currencies, activeCurrency, onSelectCurrencies } = this.props;

    return (
      <div>
        <ul className={styles.blockCurrencies} ref={currenciesRef}>
          {currencies?.map((item, index) => (
            <li
              key={`${item} ${index}`}
              onClick={() => onSelectCurrencies(index)}
              className={`${styles.currenciesItem}  
                 ${activeCurrency === index ? styles.active : ""}`}
            >
              <div className={styles.symbol}>{item.currency.symbol}</div>
              <div>{item.currency.label}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCurrency: state.currencies.activeCurrency,
  currencies: state.currencies.currencies,
});

const mapDispatchToProps = { onSelectCurrencies, onOpenPopup };

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
