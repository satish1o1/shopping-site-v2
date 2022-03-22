import './cart-dropdown.styles.scss'
import CustomButton from '../customButton/custom-button.component'
const CartDropdown = () => {
   return (
      <div className='cart-dropdown-container'>
         <div className='cart-items'/>
         <CustomButton buttonType="inverted">CHECK OUT</CustomButton>
      </div>
   )
}

export default CartDropdown;