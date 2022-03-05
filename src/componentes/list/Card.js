import React from 'react'
import "../../styles/card.css"

const Card = ({data}) => {

    console.log(data)

    return (
        <div className='card-cont'>
            <picture className='card-img'>
            <img className='image' src={data.url2} alt=''/>
            </picture>
            <p>{data.namejob}</p>
            <p>Valoracion</p>
            <p>{data.valoration}</p>
        </div>
    )
}

export default Card