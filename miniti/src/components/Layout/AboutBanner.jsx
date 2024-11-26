import React from 'react'
import Card from '../Card'

const AboutBanner = () => {
    const cardValue = {
        id : 1,
        title : 'Best Price',
        description : "descriptiondescriptiondescriptiondescriptiondescription description",
        image: "http://localhost:3000/images/Garbage management-bro.svg",

        id : 2,
        title : 'Best Price',
        description : "descriptiondescriptiondescriptiondescriptiondescription description",
        image: "http://localhost:3000/images/Garbage management-bro.svg",

        id : 3,
        title : 'Best Price',
        description : "descriptiondescriptiondescriptiondescriptiondescription description",
        image: "http://localhost:3000/images/Garbage management-bro.svg",
    };

  return (
    <div className='w-full mt-12'>
       <div className="flex justify-around">
         <Card title={cardValue.title} description={cardValue.description} image={cardValue.image}/>
       </div>
    </div>
  )
}

export default AboutBanner
