import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Header from "./pages/Header";
import Cart from "./pages/Cart";
import PDP from "./pages/Pdp";

import { AppContext } from "./components/AppContext";
import Modal from "./components/Modal";
import CartOverlay from "./components/CartOverlay";

import { fetchCategories } from "./redux/fetchCategories";
import { connect } from "react-redux";
import { onOpenPopup, setCurrencies } from "./redux/currencies/slice";
import { setProductCards, fetchProductCards } from "./redux/categories/slice";
import { setCartList } from "./redux/cartList/slice";
import { setModalShow, toggleModal } from "./redux/modal/slice";
import {
  setActiveAttribute,
  setActiveAttributeIndex,
  setActiveAttributeItem,
} from "./redux/attributes/slice";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    await this.renderProductCards();
    await this.getCurrencies();
  };

  renderProductCards = async () => {
    await this.props.fetchProductCards();
  };

  getCurrencies = async () => {
    const { activeCategory, setCurrencies } = this.props;
    const result = await fetchCategories();
    const currenciesList =
      result.data.categories[activeCategory].products[0].prices;
    setCurrencies(currenciesList);
  };

  onSelectAttribute = (attribute, el, index) => {
    const {
      setActiveAttributeItem,
      setActiveAttributeIndex,
      setActiveAttribute,
    } = this.props;

    return (
      setActiveAttributeIndex(index),
      setActiveAttribute(attribute),
      setActiveAttributeItem(attribute.items[index])
    );
  };

  createNewProduct = (product) => {
    return {
      attributes: product.attributes,
      brand: product.brand,
      prices: product.prices,
      gallery: product.gallery,
      id: product.id,
      inStock: product.inStock,
      name: product.name,
      count: 1,
    };
  };

  isInCart = (product) => {
    return this.props.cartList.some(function (e) {
      return e.id === product.id;
    });
  };

  addActiveProperties = (product) => {
    const { activeAttribute, activeAttributeItem, activeAttributeIndex } =
      this.props;
    const isInCart = this.isInCart(product);
    let newProduct = this.createNewProduct(product);

    if (!isInCart && product.inStock) {
      newProduct = {
        ...newProduct,
        activeAttribute: activeAttribute,
        activeAttributeItem: activeAttributeItem,
        activeAttributeIndex: activeAttributeIndex,
        isInCart: true,
        count: 1,
      };
    } else if (isInCart && product.inStock) {
      newProduct = {
        ...newProduct,
        activeAttribute: activeAttribute,
        activeAttributeItem: activeAttributeItem,
        activeAttributeIndex: activeAttributeIndex,
        isInCart: true,
      };
    }
    return newProduct;
  };

  onAddToCart = (product) => {
    const { cartList, setCartList } = this.props;
    const isInCart = this.isInCart(product);
    const newProduct = this.addActiveProperties(product);

    if (
      (!isInCart && newProduct.inStock && newProduct.activeAttributeIndex) ||
      (!isInCart && newProduct.inStock && !newProduct.attributes[0])
    ) {
      localStorage.setItem("cart", JSON.stringify([...cartList, newProduct]));
      setCartList(JSON.parse(localStorage.getItem("cart")));
    } else if (
      (newProduct.isInCart &&
        newProduct.inStock &&
        newProduct.activeAttributeItem) ||
      (isInCart && newProduct.inStock && !newProduct.attributes[0])
    ) {
      let productInCartList = cartList.find(
        (obj) =>
          obj.activeAttributeItem.id === newProduct.activeAttributeItem.id
      );

      if (!newProduct.attributes[0]) {
        const newCartList = cartList.map((obj) =>
          obj.id === newProduct.id ? { ...obj, count: obj.count + 1 } : obj
        );
        localStorage.setItem("cart", JSON.stringify(newCartList));
        setCartList(JSON.parse(localStorage.getItem("cart")));
      } else if (productInCartList) {
        const newCartList = cartList.map((obj) =>
          obj.activeAttributeItem.id === newProduct.activeAttributeItem.id
            ? { ...obj, count: obj.count + 1 }
            : obj
        );
        localStorage.setItem("cart", JSON.stringify(newCartList));
        setCartList(JSON.parse(localStorage.getItem("cart")));
      } else {
        localStorage.setItem("cart", JSON.stringify([...cartList, newProduct]));
        setCartList(JSON.parse(localStorage.getItem("cart")));
      }
    }
  };

  onHidePopup = () => {
    document.body.style.overflow = "";
    this.props.setModalShow(false);
  };

  render() {
    const totalPrice = this.props.cartList
      .reduce((prev, curr) => {
        return (
          prev + curr.prices[this.props.activeCurrency].amount * curr.count
        );
      }, 0)
      .toFixed(2);

    const totalCount = this.props.cartList.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0);

    const { toggleModal, modalShow } = this.props;

    const { onHidePopup, onSelectAttribute, onAddToCart } = this;

    return (
      <AppContext.Provider
        value={{
          totalCount,
          totalPrice,
          onHidePopup,
          onSelectAttribute,
          onAddToCart,
        }}
      >
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:cardId" element={<PDP />} />
          </Routes>
          <Modal
            className={
              modalShow
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "")
            }
            close={toggleModal}
            shown={modalShow}
          >
            <CartOverlay />
          </Modal>
        </div>
      </AppContext.Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies.currencies,
  productCards: state.categories.productCards,
  activeCurrency: state.currencies.activeCurrency,
  cartList: state.cartList.cartList,
  activeCategory: state.categories.activeCategory,
  modalShow: state.modal.modalShow,
  count: state.cartList.count,
  activeAttributeItem: state.attributes.activeAttributeItem,
  activeAttributeIndex: state.attributes.activeAttributeIndex,
  activeAttribute: state.attributes.activeAttribute,
});
const mapDispatchToProps = {
  fetchCategories,
  setCurrencies,
  setProductCards,
  setCartList,
  onOpenPopup,
  fetchProductCards,
  toggleModal,
  setModalShow,
  setActiveAttributeItem,
  setActiveAttributeIndex,
  setActiveAttribute,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
