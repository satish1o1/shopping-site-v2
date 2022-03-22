import './cart-icon.styles.scss'
import { ReactComponent as CartLogo } from '../../assests/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
const CartIcon = () => {
   const { isCartOpen, setIsCartOpen } = useContext(CartContext)
   const toggle = () => {
      setIsCartOpen(!isCartOpen)
   }
   return (
      <div className='cart-icon-container' onClick={toggle}>
         <CartLogo className='shopping-icon' />
         <span className='item-count'>0</span>
      </div>
   )
}

export default CartIcon;