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
        let{currencies} = this.props
        console.log(currencies)

        return (
            <div className={styles.actions}>
                <ul
                    // onClick={this.props.clickOnButton}
                    //  className={`${styles.actionsItem} ${this.props.outline ? styles.actionsOutline : ''}`}
                >
                    {/*{prices}*/}
                    $ <VectorCurrency/>
                </ul>
                {
                    this.state.openPopup && (
                        <div>
                            <ul>
                                {
                                    currencies?.map((item, index) => (
                                        <li
                                            className={styles.actionsItem}
                                            key={index}>
                                            {item.currency.symbol}
                                        </li>
                                    ))
                                }
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