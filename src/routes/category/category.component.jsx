import './category.styles.scss'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/category-item/product-card/product-card.component'
import { useContext,useEffect,useState } from 'react'
import { CategoriesContext } from '../../context/categories.context'
const Category = () => {
   const { category } = useParams()
   const { categories } = useContext(CategoriesContext)
   const [products, setProducts] = useState(categories[category])

   useEffect(() => {
      setProducts(categories[category])
   }, [categories, category])
   

   return (
      <div className='category-containe'>
         { products &&
            products.map((product) => {
               return <ProductCard product={product}  />
            })
         }
      </div>
    )
}

export default Category