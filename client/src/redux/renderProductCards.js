

import { setCurrencies } from "./currencies/slice";
import { setProductCards } from "./categories/slice";
import {connect} from "react-redux";
import { fetchCategories } from "./fetchCategories";

const renderProductCards = async () => {
  try {
    const result = await fetchCategories();
    const productCards = result.data.categories;
    console.log(productCards)
    this.props.setProductCards(productCards)
  } catch (err) {
    console.log(err);
  }
};


// const mapDispatchToProps = { setProductCards };

// export default connect(mapDispatchToProps)(renderProductCards);
