import React from "react";
import { useState, useRef, useEffect } from "react";

import { HiOutlinePlus } from "react-icons/hi";
import { useAuth } from "../../../../contexts/auth/AuthContext";
import { Navigate } from "react-router-dom";
import AddressForm from "./AddressForm";

const Address = ({ setDisplay, display }) => {
  const { user, getAddresses, address, deleteAddress } = useAuth();
  const [navigate, setNavigate] = useState(false);

  const handleDeleteAddress = async (addressName) => {
    deleteAddress(address, addressName);
  };

  useEffect(() => {
    getAddresses();
  }, [address]);

  return (
    <div className="checkout-address">
      {address.map((addressObject, index) => {
        return (
          <div className="checkout-address-box" key={index}>
            <div className="address">
              <div className="address-name">
                <input type="radio" name="address-name" id="address-name" />
                <label htmlFor="address-name">
                  <h4>{addressObject.addressName}</h4>
                </label>
              </div>
              <div className="address-content">
                <span>{addressObject.address}</span>
                <span>
                  {addressObject.state} / {addressObject.city}
                </span>
              </div>
            </div>
            <div className="edit">
              <a href="#">Edit</a>
            </div>
            <div className="divider">
              <span>|</span>
            </div>
            <div className="delete">
              <span
                onClick={() => handleDeleteAddress(addressObject.addressName)}
              >
                Delete
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Address;
