import './cart-dropdown.styles.scss'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../customButton/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
const CartDropdown = () => {
   const { cartItems } = useContext(CartContext)
   const navigate = useNavigate()

   const checkout = () => (
      navigate('/checkout')
   )
   return (
      <div className='cart-dropdown-container'>
         <div className='cart-items'>
            {
               cartItems.map((cartItem) => (<CartItem cartItem={cartItem}/>))
         }
         </div>
         <CustomButton buttonType="inverted" onClick = {checkout} >CHECK OUT</CustomButton>
      </div>
   )
}

export default CartDropdown;