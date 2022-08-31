import React from "react";
import {ReactComponent as VectorCurrency} from '../SVG/VectorCurrency.svg';
import {Link} from "react-router-dom";

import styles from "./Actions.module.css"
import {ReactComponent as HeaderBasket} from "../SVG/headerBasket.svg";

class Actions extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = ({
    //         openPopup: false,
    //         activeCurrency: 0,
    //         selectedCurrency: '$',
    //         // selectedCurrency: this.props.currencies[this.state.activeCurrency].currency.symbol
    //
    //     })
    // }

    // onSelectCurrencies = (index, e) => {
    //     this.setState({
    //         activeCurrency: index,
    //         selectedCurrency: e.target.innerText,
    //         // selectedCurrency: this.props.currencies[this.state.activeCurrency].currency.symbol,
    //         openPopup: false,
    //     })
    // }

    render() {
       console.log(this.props)
       const {currencies, activeCurrency, openPopup, selectedCurrency, onSelectCurrencies, onOpenPopup } = this.props
        // const {activeCurrency, openPopup, selectedCurrency} = this.state
        // const selectedName = currencies[activeCurrency].currency.symbol
        // console.log(currencies[activeCurrency].currency.symbol)
        // console.log(selectedCurrency)
        // console.log(selectedName)

        return (
            <div className={styles.actions}>
                <span className={styles.popupClosed}
                      onClick={onOpenPopup}>
                    {selectedCurrency}
                    {/*{selectedName}*/}
                    <VectorCurrency/>
                </span>
                {
                    openPopup && (
                        <div>
                            <ul className={styles.blockCurrencies}>
                                {
                                    currencies?.map((item, index) => (
                                        <label key={index}>
                                            <li key={index}
                                                onClick={(e) => onSelectCurrencies(index, e)}
                                                // onClick={() => onSelectCurrencies}
                                                className={`${styles.actionsItem}  
                                            ${activeCurrency === index ? styles.active : ''}`}
                                                key={index}>
                                                {item.currency.symbol}
                                            </li>
                                        </label>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
                <Link to="/cart">
                    <div className={styles.cart}>< HeaderBasket/></div>
                </Link>

            </div>
        )
    }
}


export default Actions;