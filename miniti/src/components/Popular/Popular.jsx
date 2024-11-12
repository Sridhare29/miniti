import React from 'react'
import data_product from '../../assets/data'
import Card from '../Item/Card'
import './Popular.css'

function Popular() {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Card key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular