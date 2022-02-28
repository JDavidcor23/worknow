import React from 'react'
import Navbar from "../home/Navbar"
import "../../styles/list.css"
import OrderBy from './OrderBy'
import Search from './Search'
import Cards from './Cards'

const List = () => {
    return (
        <>
            <Navbar/>
            <div className='list-container'>
                <div className='orderby'>
                    <OrderBy/>
                </div>
                <aside className='search'>
                    <Search/>
                </aside>
                <main className='cards'>
                    <Cards/>
                </main>
            </div>
        </>
    )
}

export default List