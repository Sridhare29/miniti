import React from 'react'
import './NewCollection.css'
import new_collection from '../../assets/new_collections'
import Card from '../Item/Card'   

function NewCollection() {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTION</h1>
        <hr/>
        <div className="collections-item">
            {new_collection.map((item,i)=>{
                return <Card key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection