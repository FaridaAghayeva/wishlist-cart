import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { ProductProvider } from "./pages/ContextAPIs/ProductContext.js";
import { UserProvider } from "./pages/ContextAPIs/authUserContext.js";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <WishlistProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </WishlistProvider>
  </UserProvider>
);
