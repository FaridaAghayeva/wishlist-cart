import React from "react";
import { useWishlist } from "react-use-wishlist";
import SingleCard from "../../Components/Wishlist/SingleCard";

export default function Wishlist() {
  const { items, isWishlistEmpty } = useWishlist();
  if (isWishlistEmpty) return <h1>Your wishlist is empty</h1>;
  return (
    <div>
      {items?.map((item) => {
        return <SingleCard product={item} />;
      })}
    </div>
  );
}
