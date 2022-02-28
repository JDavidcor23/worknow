import React from 'react'
import "../../styles/orderBy.css"

const OrderBy = () => {
    return (
        <div className="orderby-cont">
            <label className='order-by'>Ordenar: </label>
            <select className='select'>
                <option defaultChecked> </option>
                <option value="">Recientes</option>
                <option value="">Antiguos</option>
                <option value="">Menor tarifa</option>
                <option value="">Mayor tarifa</option>
                <option value="">Mejor calificado</option>
            </select>
        </div>
    )
}

export default OrderBy