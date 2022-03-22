import CustomButton from "../../customButton/custom-button.component";
import './product.card.styles.scss'
const ProductCard = ({ product }) => {
   const {name,price, imageUrl}= product
   return (
      <div className='product-card-container'>
      <img src={imageUrl} />
      <div className='footer'>
         <span className='name'>{name}</span>
         <span className='price'>{price}</span>
         </div>
         <CustomButton  buttonType="inverted">ADD TO CART</CustomButton>
   </div>
   )
}

export default ProductCard;