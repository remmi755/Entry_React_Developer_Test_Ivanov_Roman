import React from "react";

import styles from "./Actions.module.css"
import {ReactComponent as HeaderBasket} from "../SVG/headerBasket.svg";

class Actions extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <div className={styles.actions}>
                <div onClick={this.props.onClick}
                     className={`${styles.actionsItem} ${this.props.outline ? styles.actionsOutline : ''}`}>
                    $
                    {this.props.children}
                </div>
                <div>< HeaderBasket/></div>
            </div>
        )
    }
}


export default Actions;