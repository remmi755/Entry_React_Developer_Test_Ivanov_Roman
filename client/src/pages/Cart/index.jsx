import React from "react";
import styles from "./Cart.module.css";
import GroupOrder from "../../components/GroupOrder";
import Title from "../../components/Title";
import CartItem from "../../components/CartItem";
import { AppContext } from "../../components/AppContext";

import { connect } from "react-redux";

class Cart extends React.PureComponent {
  render() {
    const { cartList } = this.props;

    return (
      <main className={styles.container}>
        <Title className={styles.titleHeader}>
          CART
          {cartList.length === 0 ? " is Empty" : ""}
        </Title>
        {cartList &&
          cartList.map((orderItem, id) => (
            <section className={styles.content} key={id}>
              <CartItem orderItem={orderItem} id={orderItem.id} />
            </section>
          ))}
        <div className={styles.groupOrder}>
          <GroupOrder />
        </div>
      </main>
    );
  }
}

Cart.contextType = AppContext;

const mapStateToProps = (state) => ({
  cartList: state.cartList.cartList,
});

export default connect(mapStateToProps)(Cart);
