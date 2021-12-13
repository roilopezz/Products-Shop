import React, { Component } from "react";
import { CartContexts } from "../../../contexts/contexCart";

class Cart extends Component {
  static contextType = CartContexts;

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      cart,
      handleClearCart,
      handleDeleteItemCart,
      handleIncrementCart,
      handleDecrementCart,
    } = this.context;
    console.log(cart);
    return (
      <div className=" text-center">
        <br />
        <div className="text-center">
          <h1>
            Cart
            <i className="bi bi-cart2 ms-2"></i>
          </h1>
          <div className="d-flex justify-content-center">
            <hr style={{ width: "70px" }} className="my-4" />
          </div>

          <br />
        </div>

        {cart.length ? (
          <table className="table">
            <thead>
              <tr>
                <th className="hideItemCart" scope="col">
                  #
                </th>
                <th scope="col">Product</th>
                <th className="" scope="col ">
                  Amount
                </th>
                <th scope="col">price</th>
                <th scope="col"></th>
              </tr>
            </thead>

            {cart.map((item) => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <th className="hideItemCart" scope="row">
                      <img
                        style={{ width: "70px" }}
                        className="img-thumbnail rounded"
                        src={item.src}
                        alt=""
                      />
                    </th>

                    <td className="pt-xl-3 pt-lg-3 pt-md-3">{item.title}</td>
                    <td className="pt-xl-3 pt-lg-3 pt-md-3">
                      <span className="containerBtnsCart">
                        <button
                          onClick={() => handleDecrementCart(item.id)}
                          className="btnCart1 btn btn-danger me-1 me-xl-3 rr BtnsCart"
                        >
                          <i className="bi bi-dash btnMinIcon"></i>
                        </button>
                        {item.amount}
                        <button
                          className="btn btn-success ms-1 ms-xl-3 BtnsCart"
                          onClick={() => handleIncrementCart(item.id)}
                        >
                          <i className="bi bi-plus btnPluIcon"></i>
                        </button>
                      </span>
                    </td>
                    <td className="pt-xl-3 pt-lg-3 pt-md-3 tt">
                      {item.price * item.amount}
                    </td>
                    <td className="pt-xl-3 pt-lg-3 pt-md-3">
                      <button
                        onClick={() => handleDeleteItemCart(item.id)}
                        className="btn btn-danger ms-xl-4 btnDelCart BtnsCart"
                      >
                        <i className="bi bi-trash deleteCartIcon"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <p className="pt-5 mt-5">The cart is empty</p>
        )}

        <br />
        {cart.length ? (
          <div className="text-primary">
            <div className="">
              <span className="text-start">
                Total amount :
                <span className="ms-1">
                  {Object.keys(cart).reduce(function (previous, key) {
                    return previous + cart[key].amount;
                  }, 0)}
                </span>
              </span>
              <br />
              <span>
                Total price :
                <span className="ms-1 me-1">
                  {Object.keys(cart).reduce(function (previous, key) {
                    return previous + cart[key].price * cart[key].amount;
                  }, 0)}
                </span>
                $
              </span>
            </div>

            <br />
            <button
              onClick={handleClearCart}
              className="btn btn-primary mt-2 mb-4 clearBtnCart"
            >
              Clear Cart
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Cart;
