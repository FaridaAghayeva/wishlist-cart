import React from "react";
import { useCart } from "react-use-cart";
import style from "./Cart.module.css";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";

export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) return <h1>Your cart is empty</h1>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>
      <Table striped bordered hover className={style.container}>
        <thead>
          <tr>
            <th>#</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <td className={style.quantity}>{item.quantity}</td>
              <td className={style.img}>
                <img src={item.img} />
              </td>
              <td className={style.title}>{item.title}</td>
              <td className={style.price}>{item.price}</td>
              <td className={style.operations}>
                <div
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </div>
                <div
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </div>
                <div
                  onClick={() => {
                    removeItem(item.id);
                    toast.warning("Product is deleted successfully!");
                  }}
                >
                  &times;
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
