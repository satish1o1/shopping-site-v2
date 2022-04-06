import './category.styles.scss'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { useContext,useEffect,useState,Fragment } from 'react'
import { CategoriesContext } from '../../context/categories.context'
const Category = () => {
   const { category } = useParams()
   const { categories } = useContext(CategoriesContext)
   const [products, setProducts] = useState(categories[category])

   useEffect(() => {
      setProducts(categories[category])
   }, [categories, category])
   

   return (
      <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-containe'>
      { products &&
         products.map((product) => {
            return <ProductCard product={product}  />
         })
      }
   </div>
      </Fragment>
     
    )
}

export default Category