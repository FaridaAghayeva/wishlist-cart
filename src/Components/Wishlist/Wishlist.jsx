import React from "react";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "react-use-wishlist";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";
export default function Wishlist({ product }) {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const toggleWishlist = (item) => {
    if (inWishlist(item?.id)) {
      removeWishlistItem(item?.id);
      toast.warning("Product is removed from wishlist");
    } else {
      addWishlistItem(item);
      toast.success("Product is added to wishlist");
    }
  };

  return (
    <div onClick={() => toggleWishlist(product)}>
      {inWishlist(product?.id) ? <FaHeart /> : <CiHeart />}
    </div>
  );
}
