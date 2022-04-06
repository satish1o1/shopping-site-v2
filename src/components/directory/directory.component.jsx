import './directory.styles.scss'
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
         <div className='founders'>
            <div className='card'>
               <h2>
         
                  SATISH
               </h2>
            </div>
            <div className='card'>
               <h2>
                  SAIBABU
               </h2>
            </div>
            <div className='card'>
               <h2>
                  CHAITANYA
               </h2>
            </div>
         </div>

    
      </Fragment>
      
   )
}


export default Directory;