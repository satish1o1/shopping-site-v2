import './checkout.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
const CheckoutItem = ({ cartItem }) => {
   const { imageUrl, name, price, quantity } = cartItem
   const { addItemToCart, removeCartItem, clearCartItem } = useContext(CartContext)
   const clearHandler = () => clearCartItem(cartItem)
   const removeHandler = () => removeCartItem(cartItem)
   const addHandler = ()=> addItemToCart(cartItem)
   return (
      <div className='checkout-item-container'>
         <div className='image-container'>
            <img src={imageUrl} className = 'image' alt = "checkout"/>
         </div>
         <span className='name'>{name}</span>
         <span className='quantity'>
            <div className='arrow' onClick={removeHandler}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addHandler}>&#10095;</div>
         </span>
         <span className='price'>{price*quantity}</span>
         <div className='remove-button' onClick={clearHandler}>&#10005;</div>
      </div>
   )
}

export default CheckoutItem;