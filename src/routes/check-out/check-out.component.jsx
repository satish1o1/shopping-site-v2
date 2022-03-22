import './check-out.styles.scss'
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart-context';
const CheckOut = () => {
   const { cartItems ,total} = useContext(CartContext)
  
   return (
      <div className='checkout-container'>
         <div className='checkout-header'>
            <div className='header-block'>
               <span>Product</span>
            </div>
            <div className='header-block'>
            <span>Descreption</span>
            </div>
            <div className='header-block'>
            <span>quantity</span>
            </div>
            <div className='header-block'>
            <span>Price</span>
            </div>
            <div className='header-block'>
            <span>Remove</span>
          </div>
         </div> 
         {
            cartItems.map((cartItem)=><CheckoutItem cartItem={cartItem} />)
         }
         <div className='total'>Total:{total}</div>
      </div>  
   )
}

export default CheckOut;