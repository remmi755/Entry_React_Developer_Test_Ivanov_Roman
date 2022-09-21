import React from "react";
import {ReactComponent as VectorDown} from '../SVG/VectorCurrency.svg';
import {ReactComponent as VectorUp} from "../SVG/VectorUp.svg"
import {ReactComponent as CartQuantity} from "../SVG/cartQuantity.svg"

import {Link} from "react-router-dom";
import styles from "./Actions.module.css"
import {ReactComponent as HeaderBasket} from "../SVG/headerBasket.svg";

class Actions extends React.Component {
    render() {
       // console.log(this.props)
       const {currencies, activeCurrency, openPopup, onSelectCurrencies, onOpenPopup, toggleModal, totalCount}  = this.props
        // const {activeCurrency, openPopup, selectedCurrency} = this.state
        // const selectedName = currencies[activeCurrency].currency.symbol
        // console.log(currencies[activeCurrency].currency.label)
        // let symbol = currencies[activeCurrency].currency.symbol
        // console.log(currencies[activeCurrency]?.currency.symbol)
        // console.log(onSelectCurrencies)
        // console.log(currencies)
        // console.log(activeCurrency)
        return (
            <div className={styles.actions}>
                <span className={styles.popupClosed}
                      onClick={onOpenPopup}>
                    {activeCurrency ? currencies[activeCurrency].currency.symbol : "$"}
                    <span>
                        {openPopup ? <VectorUp/> : <VectorDown/>}
                        </span>
                </span>
                <span className={styles.separator}></span>
                {
                    openPopup && (
                        <div>
                            <ul className={styles.blockCurrencies}>
                                {
                                    currencies?.map((item, index) => (
                                        <li key={`${item} ${index}`}
                                            onClick={(e) => onSelectCurrencies(index, e)}
                                            className={`${styles.actionsItem}  
                                            ${activeCurrency === index ? styles.active : ''}`}
                                        >
                                            <div>{item.currency.symbol}</div>
                                            <div>{item.currency.label}</div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
                {/*<Link to="/cart">*/}

                <div className={styles.cart} onClick={toggleModal}>< HeaderBasket/></div>
                {totalCount ? ( <div className={styles.cartQuantity}><CartQuantity/></div>): ""}
                {totalCount ? (
                    <span className={styles.quantity}
                          style={totalCount > 9 ? {left: 54.5} : {left: 59}}
                    >{totalCount}
                    </span>
                ) : ""}


                {/*</Link>*/}
            </div>
        )
    }
}

export default Actions;