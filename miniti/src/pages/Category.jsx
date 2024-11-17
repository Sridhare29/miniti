import React, { useContext } from 'react';
import ShopContext from '../context/ShopContext';
import dropdown_img from '../assets/dropdown_icon.png'
import './Css/Category.css'
import Card from '../components/Item/Card';

function Category(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className="category-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="catergory-sort">
          Sort by <img src={dropdown_img} alt=''/>
        </div>
      </div>
      <div className="catergory-products">
          {all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Card key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })}
      </div>
      <div className='catergory-loadmore'>
          Expore More
      </div>
    </div>
  );
}

export default Category;
