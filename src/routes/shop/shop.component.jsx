import "./shop.styles.scss";
import { useContext } from "react";
import { ProductContext } from "../../context/product.contet";
import ProductCard from "../../components/category-item/product-card/product-card.component";
const Shop = () => {
   const {products} = useContext(ProductContext)
  return (
    <div className="product-container">
      {products.map(( product) => (
         <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Shop;
