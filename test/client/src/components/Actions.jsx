import React from "react";
import {ReactComponent as VectorCurrency} from '../SVG/VectorCurrency.svg';
import {Link} from "react-router-dom";

import styles from "./Actions.module.css"
import {ReactComponent as HeaderBasket} from "../SVG/headerBasket.svg";

class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            openPopup: false,
            activeCurrency: 0,
            selectedCurrency: '$'
        })
    }

    onSelectCurrencies = (index, e) => {
        this.setState({
            activeCurrency: index,
            selectedCurrency: e.target.innerText,
            openPopup: false,
        })
    }

    render() {
        let {currencies} = this.props
        let {activeCurrency, openPopup, selectedCurrency} = this.state

        console.log(selectedCurrency)

        return (
            <div className={styles.actions}>
                <span className={styles.popupClosed}
                      onClick={() => this.setState({openPopup: !openPopup})}>
                    {this.state.selectedCurrency}
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
                                                onClick={(e) => this.onSelectCurrencies(index, e)}
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
                    <div>< HeaderBasket/></div>
                </Link>

            </div>
        )
    }
}


export default Actions;