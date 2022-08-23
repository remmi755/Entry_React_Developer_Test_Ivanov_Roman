import React from "react";
import styles from "./Cart.module.css"
import GroupOrder from "./GroupOrder";
import Header from "./Header";

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <main className={styles.container}>
                {/*<Header productCard={this.props.productCards} onClick={this.props.onClick} />*/}
                <h1 className={styles.title}>Cart</h1>
                <section className={styles.content}>CONTENT</section>
                <div className={styles.groupOrder}>
                    <GroupOrder/>
                </div>
            </main>
        )
    }
}

export default Cart