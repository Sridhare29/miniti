import React from 'react'
import data_product from '../../assets/data'
import Card from '../Item/Card'
import './RelatedProducts.css'

function RelatedProducts() {
  return (
    <div className='relatedproducts'>
      <h1>Telated Products</h1>
      <hr/>
      <div className="relatedproducts-item">
        {data_product.map((item, i)=>{
            return <Card key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
