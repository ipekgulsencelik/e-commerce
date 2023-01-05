import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const DropdownMenu = ({ category, subcategories, image }) => {
  return (
    <>
      {console.log(subcategories)}
      <div className="dropdown-menu">
        <div className="dropdown-content">
          <div className="row">
            {/* <header>Header</header> */}
            <ul className="dropdown-links">
              {subcategories.map((subcategory, index) => {
                if (index < subcategories.length / 2)
                  return (
                    <li>
                      <Link
                        to={`/products?category=${category}&subcategory=${subcategory}`}
                      >
                        {subcategory}
                      </Link>
                    </li>
                  );
              })}
            </ul>
          </div>
          <div className="row">
            {/* <header>Header</header> */}
            <ul className="dropdown-links">
              {subcategories.map((subcategory, index) => {
                if (index > subcategories.length / 2)
                  return (
                    <li>
                      <Link
                        to={`/products?category=${category}&subcategory=${subcategory}`}
                      >
                        {subcategory}
                      </Link>
                    </li>
                  );
              })}
            </ul>
          </div>
          <div className="row">
            <img src={image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
