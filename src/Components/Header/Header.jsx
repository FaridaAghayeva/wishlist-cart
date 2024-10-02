import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export default function Header() {
  return (
    <div className={style.container}>
      <span className={style.signUp}>
        <NavLink to="/signup">Sign Up</NavLink>
      </span>
      <span className={style.signIn}>
        <NavLink to="/signin">Sign In</NavLink>
      </span>
      <span className={style.cart}>
        <NavLink
          to="/cart"
          style={{
            color: "black",
          }}
        >
          Cart
        </NavLink>
        <FaShoppingBasket />
        <NavLink
          to="/wishlist"
          style={{
            color: "black",
          }}
        >
          Wishlist
        </NavLink>
        <FaHeart />
      </span>
    </div>
  );
}
