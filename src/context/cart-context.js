import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const itemExists = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems, cartItemToRemove) => {
  const itemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (itemExists.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearTheItem = (cartItems, clearCartItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== clearCartItem.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  total: 0,
  addItemToCart: () => {},
  removeCartItem: () => {},
  clearCartItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
   const [cartCount, setCartCount] = useState(0);
   const [total, setTotal] = useState(0);

  useEffect(() => {
    const new_cartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(new_cartCount);
  }, [cartItems]);

  useEffect(() => {
    const new_total = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity* cartItem.price,
      0
    );
    setTotal(new_total);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeCartItem = (cartItemToRemove) => {
    setCartItems(removeItem(cartItems, cartItemToRemove));
  };

  const clearCartItem = (clearItem) => {
    setCartItems(clearTheItem(cartItems, clearItem));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeCartItem,
     clearCartItem,
    total
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
