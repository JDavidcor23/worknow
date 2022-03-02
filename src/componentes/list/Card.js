import React from 'react'
import "../../styles/card.css"

const Card = ({data}) => {

    console.log(data)

    return (
        <div className='card-cont'>
            <picture className='card-img'>
            <img className='image' src={data.image} alt=''/>
            </picture>
            <p>{data.service}</p>
            <p>Valoracion</p>
            <p>{data.rate}</p>
        </div>
    )
}

export default Card