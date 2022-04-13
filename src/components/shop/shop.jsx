import React, { useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { contextShop } from "../../services/shopContext";
import "./shop.css";
const Shop = () => {
  const shopContext = useContext(contextShop);

  const { handleIncrement, handleDecrement, cart, products, addToCart } =
    shopContext;

  return (
    <div className="col-12 col-xl-12 col-md-12 p-5 text-center ">
      <div className="text-center mt-5">
        <h1>
          Shop
          <i className="bi bi-cart2 ms-2"></i>
        </h1>
        <div className="d-flex justify-content-center">
          <hr style={{ width: "70px" }} className="my-4" />
        </div>

        <br />
      </div>
      <div className="row">
        {products.map((item) => {
          return (
            <div key={item.id} className="col-12 col-xl-6 col-lg-6 col-md-6">
              <div className="card-deck mb-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={item.src}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.body}</p>
                    <span>{item.category}</span>
                    <span className="ms-3">{item.price} $ </span>
                    <br />
                    <div className="text-center mt-4 d-flex justify-content-center">
                      <div className="col-xl-3 col-4">
                        <button
                          className="btn btn-primary float-start"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                        <span className="amount">{item.amount}</span>
                        <button
                          className="btn btn-danger float-end"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <Button
                      variant="success"
                      className="mt-2"
                      onClick={() => addToCart(item.id)}
                    >
                      addToCart
                    </Button>
                    {/* <div>cart {JSON.stringify(cart)}</div> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
