import React from "react";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Popup from 'reactjs-popup';

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  console.log(cartAllProduct);

  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item?.count + 1 } : item
      )
    );
  };
  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item?.count - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    const filteredItem = cartAllProduct.filter((item) => item.id !== id);
    setCartAllProduct(filteredItem);
  };

  return (
    <div>
      {cartAllProduct.map((product) => {
        return (
          <div className=" h-[200px] flex items-center border-2 m-5 p-15">
            <div>
              <img className="w-30 mr-10" src={product.img} alt="" srcset="" />
            </div>
            <div>
              <p className="text-2xl">{product.model}</p>
              <p>Price:{product.price}</p>
              <p>Brand:{product.brand}</p>
              <p>Space:{product.space}</p>
              <div className="flex gap-3 items-center ">
                <p
                  onClick={() => handleIncrement(product.id)}
                  className="border p-2 pointer font-extrabold text-lg"
                >
                  +
                </p>
                <p>{product.count}</p>
                <p
                  onClick={() => handleDecrement(product.id)}
                  className="border p-2 pointer font-extrabold text-lg"
                >
                  -
                </p>
                <MdDelete
                  onClick={() => handleDelete(product.id)}
                  className="text-2xl text-red-600 pointer"
                />
              </div>
            </div>
          </div>
        );
      })}
            {cartAllProduct.length == 0 && (
        <div>
          <h1 className="text-center text-2xl">No Products Avalable in Cart</h1>
        </div>
      )}
    </div>
    
  );
};

export default Cart;
