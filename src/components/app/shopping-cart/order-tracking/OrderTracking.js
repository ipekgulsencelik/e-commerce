import React, { useContext, useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import ShopContext from "src/contexts/basket/ShopContext";
import { baseService } from "src/network/services/baseService";
import "./style.scss";

const OrderTracking = () => {
  const context = useContext(ShopContext);

  // const getDate = () => {
  //   return new Date().toLocaleString();
  // };

  /**
   * @type {[CartProduct[]]}
   */
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await baseService.getOrderItemsByUserId(context.auth.id);
      let mergedOrderList = [];

      result.data.forEach((items) => {
        mergedOrderList = [...mergedOrderList, ...items.orderList];
      });
      setOrderList(mergedOrderList);
      // getDate();
    })();
  }, []);

  return (
    <div className="order-tracking">
      {orderList.map((product, index) => {
        return (
          <div className="order-container" key={index}>
            <div className="order-img">
              <img src={product.imgPath} alt={product.name} />
            </div>
            <div className="order-info-container">
              <section className="order-summary">
                <div className="order-info">
                  <div className="order-no">
                    <p>
                      Order No:
                      <strong className="order-no">976 463 155</strong>
                    </p>
                  </div>
                  <div className="order-time">
                    <span>{context.getDate()}</span>
                  </div>
                </div>

                <div className="order-complated">
                  <strong>
                    <FcCheckmark /> Order completed.
                  </strong>
                </div>

                <div className="order-total">
                  <span> {product.price} $</span>
                </div>
              </section>

              <span className="hr"></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderTracking;
