import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/card.css"

const Card = ({data, id}) => {

    const navigate = useNavigate()

    return (
        <div className='card-cont' onClick={()=> navigate(`/detalle-aliado/${id}`)} >
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