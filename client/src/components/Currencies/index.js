import React from "react";
import styles from "./Currencies.module.css"

import {AppContext} from "../AppContext"

class Currencies extends React.PureComponent {
  render() {
    const  {currencies, onSelectCurrencies, activeCurrency} = this.context

    return (
      <div>
        <ul className={styles.blockCurrencies} ref={this.ref}>
          {currencies?.map((item, index) => (
            <li
              key={`${item} ${index}`}
              onClick={(e) => onSelectCurrencies(index, e)}
              className={`${styles.currenciesItem}  
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
    )
  }
}

Currencies.contextType = AppContext;

export default Currencies;