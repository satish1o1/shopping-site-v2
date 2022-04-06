import CustomButton from "../customButton/custom-button.component";
import './product.card.styles.scss'
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
const ProductCard = ({ product }) => {
   const { name, price, imageUrl } = product
   const { addItemToCart } = useContext(CartContext)
   return (
      <div className='product-card-container'>
      <img src={imageUrl} />
      <div className='footer'>
         <span className='name'>{name}</span>
         <span className='price'>{price}</span>
         </div>
         <CustomButton buttonType="inverted" onClick={() => addItemToCart(product)}>ADD TO CART</CustomButton>
   </div>
   )
}

export default ProductCard;