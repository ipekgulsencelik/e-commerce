import React, { useState, useEffect } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import "./style.scss";

export const OrderDetail = ({ cart, setCart, handleChange }) => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(0);
  
  const handleRemove = (id) => {
    const cartList = cart.filter((product) => product.id !== id);
    setCart(cartList);
    handlePrice();
  };

  const handlePrice = () => {
    let total = 0;
    cart.map((item) => (total += item.amount * item.price));
    setPrice(total);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <div className="order-card">
        <div className="order-header">
          <header>Sepet (1)</header>
        </div>
        {cart.map((product) => (
          <div className="order-item-card" key={product.id}>
            <div className="item-image">
              <img src={product.img} alt="" />
            </div>
            <div className="item-content-main">
              <div className="item-main">
                <div className="item-product">
                  <a>{product.name}</a>
                  <span className="delete-icon" onClick={() => handleRemove(product.id)}>
                    <RiDeleteBinLine />
                  </span>
                </div>
                <div className="item-attributes-holder">
                  <span className="item-attribute-value">{product.color}</span>
                  <p className="item-attribute"></p>
                  <span className="item-attribute-value">{product.size}</span>
                </div>
                <div className="item-middle">
                  <span className="shipping-icon">
                    <MdOutlineLocalShipping />
                  </span>
                  <p>
                    <span>29 Aralık Perşembe</span>Tarihinde Kargoda
                  </p>
                </div>
                <div className="item-bottom">
                  <div className="item-quantity">
                    <div className="item-quantity-wrapper">
                      <a className="item-quantity-button item-decrease-button"
                        onClick={() => handleChange(product, -1)}>
                        <span>-</span>
                      </a>
                      <span className="item-quantity-input" id="number">
                        {product.amount}
                      </span>
                      <a className="item-quantity-button item-increase-button"
                        onClick={() => handleChange(product, 1)}>
                        <span>+</span>
                      </a>
                    </div>
                  </div>
                  <div className="item-price">
                    <span className="actual-price">{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))};
        <div className="order-item-card">
          <div className="item-image">
            <img src="https://02b3ab.cdn.akinoncloud.com/products/2022/11/02/42945/f713dc12-8868-47b0-b64a-aa081b93ce92_size220x220_cropCenter.jpg" />
          </div>
          <div className="item-content-main">
            <div className="item-main">
              <div className="item-product">
                <a>Kael Kadın Bornoz Ekru</a>
                <span className="delete-icon">
                  <RiDeleteBinLine />
                </span>
              </div>
              <div className="item-attributes-holder">
                <span className="item-attribute-value">Ekru</span>
                <p className="item-attribute"></p>
                <span className="item-attribute-value">S</span>
              </div>
              <div className="item-middle">
                <span className="shipping-icon">
                  <MdOutlineLocalShipping />
                </span>
                <p>
                  <span>29 Aralık Perşembe</span>Tarihinde Kargoda
                </p>
              </div>
              <div className="item-bottom">
                <div className="item-quantity">
                  <div className="item-quantity-wrapper">
                    <a
                      className="item-quantity-button item-decrease-button"
                      onClick={() => setCount((prev) => prev - amount)}
                    >
                      <span>-</span>
                    </a>
                    <span className="item-quantity-input" id="number">
                      {count}
                    </span>
                    <a
                      className="item-quantity-button item-increase-button"
                      onClick={() => setCount((prev) => prev + amount)}
                    >
                      <span>+</span>
                    </a>
                  </div>
                </div>
                <div className="item-price">
                  <span className="actual-price">{price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
