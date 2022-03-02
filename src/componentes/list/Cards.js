import React from 'react'
import Card from './Card'
import OrderBy from "./OrderBy"
import "../../styles/cards.css"
import { useState } from 'react'
import { useEffect } from 'react'

const Cards = () => {

    const url = "http://localhost:4000/services"
    const [cardData, setCardData] = useState([])

    const getData = async() => { 
        const resp = await fetch(url)
        const data = await resp.json()
        setCardData(data) 
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div className='cards-container'>
            <OrderBy/>
            { cardData.map(card => 
            <Card data={card}/>
            )
            }
        </div>
    )
}

export default Cards