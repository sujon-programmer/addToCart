import React from "react";
import productList from "./data";
import { ToastContainer, toast } from "react-toastify";

const Home = ({ setProductId }) => {
  const handleAddToCart = (id) => {
    setProductId(id);
    toast.success("Product Added to Cart Successfully" );
  };
  return (
    <div className="grid gap-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-5">
      {productList.map((product) => {
        return (
          <div key={product.id}>
            <div className="w-[200px] border-2 rounded-2xl p-4">
              <img
                className="h-[190px] w-[150px] item-center"
                src={product.img}
                alt=""
                srcset=""
              />
              <div className="flex justify-between">
                <p>{product.brand}</p>
                <p>{product.model}</p>
              </div>
              <div>
                <p>{product.price} tk</p>
                <p>{product.space}</p>
                <button
                  className="bg-blue-500 p-2 text-center rounded-2xl pointer "
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add To Cart
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
