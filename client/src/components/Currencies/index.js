import React from "react";
import styles from "./Currencies.module.css"

import {connect} from "react-redux";
import {onSelectCurrencies} from '../../redux/currencies/slice'

// import {AppContext} from "../AppContext"

class Currencies extends React.PureComponent {
  render() {

    // const  {onSelectCurrencies, activeCurrency} = this.context
    const  { currencies, activeCurrency, onSelectCurrencies } = this.props
// console.log(this.props.activeCurrency)
console.log( currencies)
// console.log(this.props.value)
    return (
      <div>
        <ul className={styles.blockCurrencies} ref={this.ref}>
          {currencies?.map((item, index) => (
            <li
              key={`${item} ${index}`}
              // onClick={(e) => onSelectCurrencies(index, e)}
              onClick={() => onSelectCurrencies(index)}

              className={`${styles.currenciesItem}  
                                            ${
                activeCurrency === index
                  ? styles.active
                  : ""
              }`}
            >
              <div className={styles.symbol}>{item.currency.symbol}</div>
              <div>{item.currency.label}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// Currencies.contextType = AppContext;

// export default Currencies;

const mapStateToProps = (state) => ({
  activeCurrency: state.currencies.activeCurrency,
  currencies: state.currencies.currencies,
});

const mapDispatchToProps = { onSelectCurrencies };

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);