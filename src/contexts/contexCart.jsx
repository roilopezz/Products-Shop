import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CartContexts = React.createContext();

class CartsContexts extends Component {
  state = {
    products: [
      {
        id: 1,
        price: 700,
        title: "product 1",
        body: "body product 1",
        category: "category 1",
        amount: 0,
        src: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg",
      },
      {
        id: 2,
        price: 100,
        title: "product 2",
        body: "body product 2",
        category: "category 2",
        amount: 0,
        src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      },
      {
        id: 3,
        price: 700,
        title: "product 3",
        body: "body product 3",
        category: "category 3",
        amount: 0,
        src: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg",
      },
      {
        id: 4,
        price: 700,
        title: "product 4",
        body: "body product 4",
        category: "category 4",
        amount: 0,
        src: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg",
      },
      {
        id: 5,
        price: 700,
        title: "product 1",
        body: "body product 1",
        category: "category 1",
        amount: 0,
        src: "https://images.unsplash.com/photo-1570993492903-ba4c3088f100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      },
      {
        id: 6,
        price: 100,
        title: "product 2",
        body: "body product 2",
        category: "category 2",
        amount: 0,
        src: "https://images.unsplash.com/photo-1511025998370-7d59f82e9c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      },
      {
        id: 7,
        price: 700,
        title: "product 3",
        body: "body product 3",
        category: "category 3",
        amount: 0,
        src: "https://images.unsplash.com/photo-1505739718967-6df30ff369c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      },
      {
        id: 8,
        price: 700,
        title: "product 4",
        body: "body product 4",
        category: "category 4",
        amount: 0,
        src: "https://cdn.pixabay.com/photo/2014/02/22/19/45/camera-272263_960_720.jpg",
      },
    ],
    cart: [],
    errors: "",
  };

  handleDelete = (id) => {
    const { products } = this.state;
    const productDel = products.filter((product) => product.id !== id);

    this.setState({
      products: productDel,
    });
  };

  totalAmount = () => {
    const { cart } = this.state;
    const updatedProducts = cart.map((carts) => {
      return { amount: carts.amount };
    });

    return updatedProducts;
  };

  handleIncrement = (id) => {
    const { products } = this.state;

    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, amount: product.amount + 1 };
      }

      return product;
    });

    this.setState({ products: updatedProducts });
  };

  handleDecrement = (id) => {
    const { products } = this.state;

    const minus = products.map((product) => {
      if (product.id === id && product.amount > 0) {
        if (product.id === id) {
          return { ...product, amount: product.amount - 1 };
        }
      }
      return product;
    });
    this.setState({ products: minus });
  };

  //add to cart

  randomId = () => {
    let randomNumber = Math.floor(Math.random() * 999999999999999);
    return randomNumber;
  };

  addToCart = (id) => {
    const { products, cart } = this.state;

    return this.setState({
      products: products.map((product) => {
        if (product.id === id && product.amount !== 0) {
          cart.push({ ...product, id: this.randomId() });
          toast.success("Item added successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return { ...product, amount: (product.amount = 0) };
        }

        if (product.id === id && product.amount === 0) {
          toast.error("must one product !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return { ...product };
        }
        return { ...product };
      }),
    });
  };

  handleIncrementCart = (id) => {
    const { cart } = this.state;

    const updatedProducts = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    this.setState({ cart: updatedProducts });
  };

  handleDecrementCart = (id) => {
    const { cart } = this.state;

    const updatedProducts = cart.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      }

      if (item.id === id && item.amount <= 1) {
        toast.error("need at least one product !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return item;
      }

      return item;
    });

    this.setState({ cart: updatedProducts });
  };

  handleClearCart = () => {
    const { cart } = this.state;
    toast.info("The cart was cleaned", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    window.scrollTo(0, 0);
    this.setState({
      cart: cart.filter((product) => {
        return null;
      }),
    });
  };

  handleDeleteItemCart = (id) => {
    const { cart } = this.state;
    toast.info("The Item was deleted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.setState({
      cart: cart.filter((product) => {
        return product.id !== id;
      }),
    });
  };

  render() {
    return (
      <CartContexts.Provider
        value={{
          ...this.state,
          plus: this.plus,
          addToCart: this.addToCart,
          handleDelete: this.handleDelete,
          handleIncrement: this.handleIncrement,
          handleDecrement: this.handleDecrement,
          handleClearCart: this.handleClearCart,
          handleDeleteItemCart: this.handleDeleteItemCart,
          totalAmount: this.totalAmount,
          handleIncrementCart: this.handleIncrementCart,
          handleDecrementCart: this.handleDecrementCart,
        }}
      >
        <ToastContainer />
        {this.props.children}
      </CartContexts.Provider>
    );
  }
}

export default CartsContexts;
