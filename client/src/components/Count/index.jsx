import React from "react";
import Button from "../Button"
import styles from "./Count.module.css"

class Count extends React.PureComponent {

    render() {
        const{children, classSize, countIncrease, countDecrease, orderItem, id} = this.props

        return (
            <>
                <Button className={`${classSize} ${styles.countItem}`} onClick={() => countIncrease(orderItem, id)}>+</Button>
                <div className={`${classSize} ${styles.borderNone}`}>{children}</div>
                <Button className={`${classSize} ${styles.countItem}`} onClick={() => countDecrease(orderItem, id)}>-</Button>
            </>
        )
    }
};

export default Count;