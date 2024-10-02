import React, { useContext, useEffect, useState } from "react";
import style from "./ProductsAll.module.css";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../ContextAPIs/ProductContext.js";
import { useCart } from "react-use-cart";
import { FaShoppingBasket } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
import Wishlist from "../../Components/Wishlist/Wishlist.jsx";
export default function ProductsAll() {
  const { products } = useContext(ProductContext);
  const { addItem } = useCart();
  return (
    products &&
    products.length > 0 && (
      <div className={style.container}>
        {products.map((product) => (
          <div key={product.id} className={style.itemContainer}>
            <div className={style.itemImg}>
              <img src={product.img} alt={product.title} />
            </div>
            <div className={style.itemTitle}>{product.title}</div>
            <div className={style.itemPrice}>{product.price}</div>
            <div className={style.itemBtn}>
              <NavLink to={`/${product.id}`}>Click for more</NavLink>
            </div>
            <div className={style.btnContainer}>
              <div
                onClick={() => {
                  addItem(product);
                  toast.success("Product successfully added");
                }}
              >
                <FaShoppingBasket />
              </div>
              <div>
                <Wishlist product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
