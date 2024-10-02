import React, { useContext } from "react";
import style from "./ProductSingle.module.css";
import { useParams } from "react-router-dom";
import { ProductContext } from "../ContextAPIs/ProductContext";
import { FaHeart, FaShoppingBasket } from "react-icons/fa";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import Wishlist from "../../Components/Wishlist/Wishlist";
export default function Productingle() {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const product = products?.find((product) => product.id === productId);
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  return (
    <div className={style.container}>
      <div className={style.itemImg}>
        <img src={product?.img} alt={product?.title} />
      </div>
      <div className={style.itemContainer}>
        <div className={style.itemTitle}>{product?.title}</div>
        <div className={style.itemPrice}>{product?.price}</div>
        <div
          onClick={() => {
            addItem(product);
            toast.success("Product is successfully added to cart");
          }}
        >
          <FaShoppingBasket />
        </div>
        <div
          onClick={() => {
            addWishlistItem(product);
            toast.success("Product is successfully added to wishlist");
          }}
        >
          <Wishlist product={product}/>
        </div>
        <div className={style.itemDesc}>{product?.description}</div>
      </div>
    </div>
  );
}
