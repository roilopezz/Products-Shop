import React, { useState } from "react";
import { toast } from "react-toastify";

export const contextShop = React.createContext();

const ShopContext2 = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      price: 700,
      title: "product 1",
      body: "body product 1",
      category: "category 1",
      amount: 0,
      src: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg",
      discount: false,
    },
    {
      id: 2,
      price: 100,
      title: "product 2",
      body: "body product 2",
      category: "category 2",
      amount: 0,
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      discount: false,
    },
    {
      id: 3,
      price: 700,
      title: "product 3",
      body: "body product 3",
      category: "category 3",
      amount: 0,
      src: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg",
      discount: false,
    },
    {
      id: 4,
      price: 700,
      title: "product 4",
      body: "body product 4",
      category: "category 4",
      amount: 0,
      src: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg",
      discount: false,
    },
    {
      id: 5,
      price: 700,
      title: "product 1",
      body: "body product 1",
      category: "category 1",
      amount: 0,
      src: "https://images.unsplash.com/photo-1570993492903-ba4c3088f100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      discount: false,
    },
    {
      id: 6,
      price: 100,
      title: "product 2",
      body: "body product 2",
      category: "category 2",
      amount: 0,
      src: "https://images.unsplash.com/photo-1511025998370-7d59f82e9c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      discount: false,
    },
    {
      id: 7,
      price: 700,
      title: "product 3",
      body: "body product 3",
      category: "category 3",
      amount: 0,
      src: "https://images.unsplash.com/photo-1505739718967-6df30ff369c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      discount: false,
    },
    {
      id: 8,
      price: 700,
      title: "product 4",
      body: "body product 4",
      category: "category 4",
      amount: 0,
      src: "https://cdn.pixabay.com/photo/2014/02/22/19/45/camera-272263_960_720.jpg",
      discount: false,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [coupons, setCoupons] = useState(["one", "two"]);
  const [discount, setDiscounts] = useState(0.5);

  let toastSettings = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const addCoupon = (checkCoupon) => {
    let checker = false;

    if (coupons.includes(checkCoupon)) {
      const updateCart = cart.map((item) => {
        if (item.discount == false) {
          checker = true;
          return {
            ...item,
            price: item.price * discount,
            discount: true,
          };
        }

        return item;
      });
      if (checker === true) {
        toast.success("You received a discount");
      }

      if (checker === false) {
        toast.info("The coupon is redeemed!");
      }
      setCart(updateCart);
    } else {
      toast.info("Invalid coupon code");
    }
  };

  const addToCart = (id) => {
    let updatedProducts = products.map((product) => {
      if (product.id === id && product.amount !== 0) {
        let indexCart = cart.findIndex((pro) => pro.id === id);

        if (indexCart !== -1) {
          cart[indexCart].amount += product.amount;
          toast.success("Item added successfully", toastSettings);
        } else {
          setCart([...cart, { ...product }]);
          toast.success("Item added successfully", toastSettings);
        }

        return { ...product, amount: 0 };
      }

      if (product.id === id && product.amount === 0) {
        toast.error("must one product !", toastSettings);
      }

      return { ...product };
    });

    setProducts(updatedProducts);
  };

  const handleIncrement = (id) => {
    const increment = products.map((product) => {
      if (product.id === id) {
        return { ...product, amount: product.amount + 1 };
      }
      return product;
    });

    setProducts(increment);
  };

  const handleDecrement = (id) => {
    const decrement = products.map((product) => {
      if (product.id === id && product.amount > 0) {
        if (product.id === id) {
          return { ...product, amount: product.amount - 1 };
        }
      }
      return product;
    });
    setProducts(decrement);
  };

  const handleIncrementCart = (id) => {
    const updatedProducts = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    setCart(updatedProducts);
  };

  const handleDecrementCart = (id) => {
    const updatedProducts = cart.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      }

      if (item.id === id && item.amount <= 1) {
        toast.error("need at least one product !", toastSettings);
        return item;
      }

      return item;
    });

    setCart(updatedProducts);
  };

  const handleClearCart = () => {
    toast.info("The cart was cleaned", toastSettings);
    window.scrollTo(0, 0);
    setCart([]);
  };

  const userLogout = () => {
    setCart([]);
  };

  const handleDeleteItemCart = (id) => {
    toast.info("The Item was deleted", toastSettings);

    let deleteItem = cart.filter((product) => {
      return product.id !== id;
    });

    setCart(deleteItem);
  };

  return (
    <contextShop.Provider
      value={{
        addToCart: addToCart,
        cart: [...cart],
        products: [...products],
        handleDecrement: handleDecrement,
        handleIncrement: handleIncrement,
        handleIncrementCart: handleIncrementCart,
        handleDecrementCart: handleDecrementCart,
        handleClearCart: handleClearCart,
        userLogout: userLogout,
        handleDeleteItemCart: handleDeleteItemCart,
        addCoupon: addCoupon,
      }}
    >
      {children}
    </contextShop.Provider>
  );
};

export default ShopContext2;
