import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/card.css"

const Card = ({data, id}) => {

    const navigate = useNavigate()

    return (
        <div className='card-cont' onClick={()=> navigate("/detalle-aliado")} >
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