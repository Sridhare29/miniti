import React, { useContext } from 'react'
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import '../ProductView/ProductView.css'
import ShopContext from '../../context/ShopContext'

const ProductView = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='productDisplay'>
    <div className="productDisplay-left">
      <div className="productdisplay-left-imglst">
          <img src={product.image} alt=''/>
          <img src={product.image} alt=''/>
          <img src={product.image} alt=''/>
          <img src={product.image} alt=''/>
      </div>
      <div className="productDisplay-img">
        <img src={product.image} alt="" className="productDisplay-mainimg" />
      </div>
    </div>
    <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-stars">
          <img src={star_icon} alt=''/>
          <img src={star_icon} alt=''/>
          <img src={star_icon} alt=''/>
          <img src={star_icon} alt=''/>
          <img src={star_dull_icon} alt=''/>
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-prices-old">${product.old_price}</div>
          <div className="productDisplay-right-prices-new">${product.new_price}</div>
        </div>
        <div className="productDisplay-right-description">
        Clothing refers to garments made from various materials such as fabric, leather, or synthetic fibers, designed to cover and protect the body. They serve functional purposes like warmth and durability while also reflecting personal style, cultural traditions, and fashion trends. Clothing ranges from casual wear to formal attire, catering to different occasions and climates.
        </div>
        <div className="productDisplay-right-size">
          <h1>Select size</h1>
          <div className="productDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
        <p className="productDisplay-right-category">
          <span>Category :</span> Women , T-shirt,Crop-Top
        </p>
        <p className="productDisplay-right-category">
          <span>Tag :</span> Modren , Latest,Crop-Top
        </p>
    </div>
  </div>

  )
}

export default ProductView
