import React, { useContext, useEffect, useState } from "react";

import "./style.scss";
import "../../../../utilities.scss";

import { useNavigate } from "react-router-dom";
import ShopContext from "src/contexts/basket/ShopContext";
import Product from "src/pages/dashboard/product/Product";

export const BasketSummary = ({ cart, setCart, handleChange, setMessage }) => {
  const navigate = useNavigate();
  const context = useContext(ShopContext);
  // const [count, setCount] = useState(0);
  // const [price, setPrice] = useState(0);

  // const handleRemove = (id) => {
  //   // const cartList = cart.filter((product) => product.id !== id);
  //   // setCart(cartList);
  //   context.removeProductFromCart(id);
  //   handlePrice();
  // };

  // const handlePrice = () => {
  //   let total = 0;
  //   context.cart.map((item) => (total += item.amount * item.price));
  //   setPrice(total);
  // };

  // const handleCount = () => {
  //   let cartCount = 0;
  //   context.cart.map((item) => (cartCount += item.amount));
  //   setCount(cartCount);
  // };

  // const handleMessage = () => {
  //   console.log(price);
  //   let value = 0;
  //   if (price < 200) {
  //     value = 200 - price;
  //     setMessage(
  //       "Add another  $" +
  //         value +
  //         " worth of items to your cart and get free shipping."
  //     );
  //   } else {
  //     setMessage("");
  //   }
  // };

  // useEffect(() => {
  //   handlePrice();
  //   handleCount();
    // handleMessage();
  // });

  // const [price, setPrice] = useState;
  // const [count, setCount] = useState;

  // const handleRemove = (id) => {
  //   context.removeProductFromCart(id);
  //   handlePrice();
  // };

  // const handlePrice = () => {
  //   let total = 0;
  //   context.cart.map((item) => (total += item.amount * item.price));
  //   setPrice(total);
  // };

  // const handleCount = () => {
  //   let basketCount = 0;
  //   context.cart.map((item) => (basketCount += item.amount));
  //   setCount(basketCount);
  // };

  // useEffect(() => {
  //   handleRemove();
  //   handlePrice();
  //   handleCount();
  // });

  return (
    <>
      <div className="basket-summary">
        <div className="basket-header">
          <header>Basket Summary</header>
        </div>
        {context.cart.map((product) => (
          <>
            <div className="basket-card">
              <div className="card" key={product.id}>
                <div className="card-img">
                  <img src={product.imgPath} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-left">
                    <div className="card-info">
                      <p>{product.name}</p>
                      <p>{product.amount} piece</p>
                      <p>{product.color}</p>
                    </div>
                  </div>
                  <div className="card-right">
                    <div className="card-price">
                      <p className="product-price">
                        <strong>{context.totalPrice()} $</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-divide">
                <span className="hr"></span>
              </div>
            </div>

            <div className="basket-middle">
              <div className="basket-product">
                <p>Products</p>
                <p className="price">
                  <strong> {product.price.toFixed(2)} $</strong>
                </p>
              </div>
              <div className="basket-shipment">
                <p>Shipment</p>
                <p className="shipment-price">
                  <strong>- 0,00 $</strong>
                </p>
              </div>
              <div className="free-shipping">
                <p>Free Shipping For Shopping Over 200 $</p>
              </div>
            </div>

            <div className="or-divide">
              <span className="hr"></span>
            </div>
            <div className="basket-end">
              <div className="basket-total">
                <p>Total</p>
                <p className="total-price">
                  <strong>{(product.price * product.amount).toFixed(2)} $</strong>
                </p>
              </div>
              <div className="continue-button">
                <button
                  className="btn btn-gray"
                  onClick={() => navigate("/shopping/cart")}
                >
                  Continue
                </button>
                <p className="warning-msg">Devam etmek icin Adres ekleyiniz</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default BasketSummary;
