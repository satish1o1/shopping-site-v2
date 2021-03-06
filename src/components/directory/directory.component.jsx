import './directory.styles.scss'
import img from '../../assests/user-2.png'
import { Fragment } from 'react';
import DirectoyrItem
 from '../directory-item/directory-item.component';
const Directory = ({ categories }) => {
  
   return (
      <Fragment>
      <div className='categories-container'> 
         {
            categories.map((category) => (
               <DirectoyrItem category={category} />
            ))
         }
         </div>
         <h2>Founders</h2>
         <div className='founders'>
            <div className='card'>
            <img  src={img}  />
               <h2>  
                  SATISH
               </h2>
            </div>
            <div className='card'>
            <img  src={img}  />
               <h2>
                  SAIBABU
               </h2>
            </div>
            <div className='card'>
            <img  src={img}  />
               <h2>
                  CHAITANYA
               </h2>
            </div>
         </div>

    
      </Fragment>
      
   )
}


export default Directory;