import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { listarPartnerAsincrono } from '../../actions/actionPartner'
import "../../styles/card.css"

const Card = ({data, id}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const navigateAndGetUser = (id,uid)=>{
        dispatch(listarPartnerAsincrono(uid))
        navigate(`/detalle-aliado/${id}`)
    }
    return (
        <div className='card-cont' onClick={()=> navigateAndGetUser(id, data.uid)} >
            <picture className='card-img'>
                <img className='image' src={data.url} alt=''/>
            </picture>
            <p style={{textAlign:"center"}}>{data.namejob}</p>
            <p style={{textAlign:"center"}}>Valoración {data.valoration}</p>
        </div>
    )
}

export default Card