import React from "react";
import {ReactComponent as VectorCurrency} from '../SVG/VectorCurrency.svg';

import styles from "./Actions.module.css"
import {ReactComponent as HeaderBasket} from "../SVG/headerBasket.svg";

class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            // openPopup: false,
            openPopup: true
        })
    }
    render() {
        // console.log(this.props.productCards[0].products[0].prices)
        // let prices = this.props.productCards[0].products[0].prices
        // const currency = prices.map((price, id) => (
        //     <li key={id}>{price.currency.symbol}</li>
        // ))

        return (
            <div className={styles.actions}>
                <ul
                    // onClick={this.props.clickOnButton}
                    //  className={`${styles.actionsItem} ${this.props.outline ? styles.actionsOutline : ''}`}
                >
                    {/*{prices}*/}
                    $
                    <VectorCurrency />
                </ul>
                {
                    this.state.openPopup && (
                        <div>
                            <ul>
                                {/*{*/}
                                {/*    prices.map((price, index) =>(*/}
                                {/*     <li*/}
                                {/*         className={styles.actionsItem}*/}
                                {/*         key={index}>{price.currency.symbol}</li>*/}
                                {/*    ))*/}
                                {/*}*/}
                                {/*<li>$</li>*/}
                                {/*<li></li>*/}
                                {/*<li></li>*/}
                                {/*<li></li>*/}
                                {/*<li></li>*/}
                            </ul>
                        </div>
                    )

                }
                <div>< HeaderBasket/></div>
            </div>
        )
    }
}


export default Actions;