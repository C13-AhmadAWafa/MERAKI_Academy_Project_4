import React from "react";
import  { useEffect, useState } from "react";
import { Cart } from "../role 2 interface/src";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    Cart()
      .then((response) => setCartItems(response.data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
