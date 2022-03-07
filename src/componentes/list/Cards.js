import React from 'react'
import Card from './Card'
import OrderBy from "./OrderBy"
import "../../styles/cards.css"
import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { jobsListFilterASincrono } from '../../actions/actionJobsList'
import { useSelector } from "react-redux";
const Cards = () => {
    const dispatch = useDispatch()
    const {jobsList} = useSelector((state) => state.listjobs);
    
    useEffect(() => {
        dispatch(jobsListFilterASincrono())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
        {jobsList !== undefined &&
        <div className='cards-container'>

                <OrderBy/>
                { jobsList.map(card => 
                <Card data={card} key={card.id} id={card.id}/>
                )
            }
        </div>
        } 
        </>
    )
}

export default Cards