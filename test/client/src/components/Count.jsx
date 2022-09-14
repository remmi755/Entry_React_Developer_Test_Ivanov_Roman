import React from "react";
import styles from "./Count.module.css"

class Count extends React.Component {
    render() {
        // console.log(this.props)
        const{children, classSize, countIncrease, countDecrease,orderItem, id } = this.props
        // const {name, brand} = this.props
        // console.log(cartItem.name)

        return (
            <>
                {/*<p className={className}>{children}</p>*/}
                <button className={`${classSize} ${styles.countItem}`} onClick={() => countIncrease(orderItem, id)}>+</button>
                {/*<div className={`${styles.sumItem} ${styles.borderNone}`}>{orderItem.count}</div>*/}
                <div className={`${classSize} ${styles.borderNone}`}>{children}</div>
                <button className={`${classSize} ${styles.countItem}`} onClick={() => countDecrease(orderItem, id)}>-</button>
            </>
        )
    }
};

export default Count;