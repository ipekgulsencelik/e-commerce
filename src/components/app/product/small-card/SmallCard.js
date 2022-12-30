import React, { useState } from "react";
import "./style.scss";
import Modal from "../../../shared/modal/Modal";

const SmallCard = ({ path, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  //console.log(isOpen);
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} path={path} index={index} />}
      <div className="small-card" index>
        <div className="product-img">
          <img src={path} alt="Çiçek işlemeli bluz" />
        </div>
        <div className="quickview">
          <span className="quickview_icon" onClick={() => setIsOpen(true)}>
            Quick View
          </span>
          <div className="quickview_info" lang="tr">
            <p className="quickview_info">Çiçek işlemeli bluz</p>
            <p className="quickview_info_price" id="bluz">
              $298.00
            </p>
          </div>

          {/* <div className="colors">
          <div className="red"> </div>
          <div className="yellow"> </div>
          <div className="blue"> </div>
          <div className="green"> </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default SmallCard;
