import React from 'react';
import Navbar from './Navbar';
import "../../styles/home.css"
import memphis from "../../resources/home-guy.png"
import AboutUs from './AboutUs';
import HowDoesItWorks from './HowDoesItWorks';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    
    const navigate = useNavigate()

    return (
        <>
        <div className='main-home' id='inicio'>
            <Navbar/>
            <main className='home-cont'>
                <div className='content'>
                    <h1 className='main-title'>Conecta con nuestros partners en WorkNow.</h1>
                    <p>Somos la red que te conecta con quien necesitas.</p>
                    <div className='search-home'>
                        
                    </div>
                    <div className='buttons'>
                        <button onClick={()=> navigate("/listado")}>Ver listado</button>
                        <button onClick={()=> navigate("/perfil")}>Ser un partner</button>
                    </div>
                </div>
                <div className='memphis'>
                    <img className='memphis-img' src={memphis} alt=""/>
                </div>
            </main>
        </div>
        <AboutUs/>
        <HowDoesItWorks/>
        <Footer/>
        </>
    );
};

export default Home;