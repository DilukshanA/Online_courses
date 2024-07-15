import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'



const Popular = () => {
  return (
    <div className='popular'>
      <div className="popular-scale">
        <h1 className='popular-white'>Popular<h1 className='popular-red' >Courses</h1> </h1>
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return<Item key={i} id={item.id} image={item.image} owner_logo={item.owner_logo} owner_name={item.owner_name} course_name={item.course_name} course_level={item.course_level}/>
            })}
        </div>
        </div>
    </div>
  )
}

export default Popular