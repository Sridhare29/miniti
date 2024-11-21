import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/breadcrum';
import ProductView from '../components/ProductView/ProductView';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { product_Id } = useParams();
  const productdata = all_product.find((e) => e.id === Number(product_Id));

  return (
    <div>
      <Breadcrum product={productdata}/>
      <ProductView product={productdata}/>
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product
