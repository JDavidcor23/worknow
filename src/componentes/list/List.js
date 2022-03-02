import React from 'react'
import Navbar from "../home/Navbar"
import "../../styles/list.css"
import Search from './Search'
import Cards from './Cards'
import Footer from "../home/Footer"

const List = () => {
    return (
        <main className='list-main'>
            <Navbar/>
            <div className='list-container'>
                <aside className='search'>
                    <Search/>
                </aside>
                <main className='cards'>
                    <Cards/>
                </main>
            </div>
            <Footer/>
        </main>
    )
}

export default List