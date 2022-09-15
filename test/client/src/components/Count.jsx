import React from "react";
import styles from "./Count.module.css"

class Count extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.count !== this.props.count ) {

            // this.setState({
            //     total:{
            //         totalPrice: (this.props.cartList.reduce((prev, curr) => {
            //             return prev + curr.prices[this.props.activeCurrency].amount * curr.count
            //         }, 0)).toFixed(2),
            //         totalCount: this.props.cartList.reduce((prev, curr) => {
            //             return prev + curr.count
            //         }, 0)
            //     }
            // })
        }
    }
    render() {
        // console.log(this.props)
        const{children, classSize, countIncrease, countDecrease,orderItem, id } = this.props
        // const {name, brand} = this.props
        console.log(orderItem.count)

        return (
            <>
                <button className={`${classSize} ${styles.countItem}`} onClick={() => countIncrease(orderItem, id)}>+</button>
                <div className={`${classSize} ${styles.borderNone}`}>{orderItem.count}</div>
                {/*<div className={`${classSize} ${styles.borderNone}`}>{children}</div>*/}
                <button className={`${classSize} ${styles.countItem}`} onClick={() => countDecrease(orderItem, id)}>-</button>
            </>
        )
    }
};

export default Count;