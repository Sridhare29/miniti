import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/breadcrum';

function Product() {
  const {all_product} = useContext(ShopContext);
  const {product_Id} = useParams();
  const product = all_product.find((e)=> e.id === Number(product_Id));

  return (
    <div>
      <Breadcrum product={product}/>
    </div>
  )
}

export default Product
