import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;
    const category = product?.category || 'NA';
    const name = product?.name || 'NA';

    return (
        <div className='breadcrum'>
            Home<img src={arrow_icon} alt='' />SHOP<img src={arrow_icon} alt='' />
            {category}<img src={arrow_icon} alt='' />{name}
        </div>
    );
};

export default Breadcrum;
