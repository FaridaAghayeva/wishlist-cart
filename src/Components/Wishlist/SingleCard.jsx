import React from "react";
import { useCart } from "react-use-cart";
import style from "./SingleCard.module.css";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import { useWishlist } from "react-use-wishlist";

export default function SingleCard({ product }) {
  const { removeWishlistItem } = useWishlist();
  
  return (
    <>
      <Table striped bordered hover className={style.container}>
        <thead>
          <tr>
            <th>Name of Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr key={product.id}>
            <td className={style.img}>
              <img src={product.img} />
            </td>
            <td className={style.title}>{product.title}</td>
            <td className={style.price}>{product.price}</td>
            <td className={style.operations}>
              <div
                onClick={() => {
                  removeWishlistItem(product.id);
                  toast.warning("Product is removed successfully!");
                }}
              >
                &times;
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
