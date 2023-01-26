import React from "react";
import styles from "./GroupOrder.module.css";
import Button from "../Button";
import TitlePlusValue from "../TitlePlusValue";

import { connect } from "react-redux";
import { AppContext } from "../AppContext";

class GroupOrder extends React.PureComponent {
  clearListOrder = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    const { totalCount, totalPrice } = this.context;
    const { selectedCurrency } = this.props;

    const tax = ((totalPrice * 21) / 100).toFixed(2);

    return (
      <main className={styles.order}>
        <TitlePlusValue
          classNameTitle={styles.tax}
          classNameValue={styles.taxValue}
          name="Tax 21% :"
          value={`${selectedCurrency} ${tax}`}
        />
        <TitlePlusValue
          classNameTitle={styles.quantity}
          classNameValue={styles.quantityValue}
          name="Quantity:"
          value={totalCount}
        />
        <TitlePlusValue
          classNameTitle={styles.total}
          classNameValue={styles.totalValue}
          name="Total:"
          value={`${selectedCurrency} ${totalPrice}`}
        />
        <Button className={styles.button} onClick={this.clearListOrder}>
          ORDER
        </Button>
      </main>
    );
  }
}

GroupOrder.contextType = AppContext;

const mapStateToProps = (state) => ({
  selectedCurrency: state.currencies.selectedCurrency,
});

export default connect(mapStateToProps)(GroupOrder);
