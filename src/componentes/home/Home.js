import React from 'react';
import Navbar from './Navbar';
import "../../styles/home.css"
import memphis from "../../resources/home-guy.png"

const Home = () => {
    return (
        <div className='main-home'>
            <Navbar/>
            <main className='home-cont'>
                <div className='content'>
                    <h1 className='main-title'>Conecta con nuestros aliados Freelance</h1>
                    <p>Somos la red que te conecta con el mejor aliado</p>
                    <div className='search'>
                        <input placeholder='Busca tu aliado'/>
                        <button><i class="fas fa-search"></i>
                        </button>
                    </div>
                    <div className='buttons'>
                        <button>Ver aliados</button>
                        <button>Ser un aliado</button>
                    </div>
                </div>
                <div className='memphis'>
                    <img className='memphis-img' src={memphis} alt=""/>
                </div>
            </main>
        </div>
    );
};

export default Home;