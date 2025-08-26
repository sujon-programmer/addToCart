import React from "react";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  console.log(cartAllProduct);

    const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);


  return (
    <div>
      {
        cartAllProduct.map((product)=>{
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
            <p onClick={increment} className="border p-2 pointer font-extrabold text-lg">
              +
            </p>
            <p>{count}</p>
            <p onClick={decrement} className="border p-2 pointer font-extrabold text-lg">
              -
            </p>
        <MdDelete className ="text-2xl text-red-600"/>
          </div>
        </div>

      </div>
          )
        })
      }

    </div>
  );
};

export default Cart;
