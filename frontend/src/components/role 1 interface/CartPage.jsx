import React from "react";
import  { useEffect, useState } from "react";







const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart()
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
import { fetchCart } from "../role 2 interface/src";
export default CartPage;
