import React from 'react'
import Navbar from '../home/Navbar'
import picture from "../../resources/picture.png"
import "../../styles/detail.css"
import Footer from '../home/Footer'
import contact from "../../resources/amigos.png"
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const Detail = () => {
    const [user, setUser] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const number =573003073883

    const getJobData =  useSelector((watchjobs => watchjobs.listjobs.jobsList))

    let { id } = useParams();
    console.log(id)

    const filterDatabyId = (id) => {
        const filterData = getJobData.filter(user => user.id === id)
        setUser(filterData[0])
    }
    useEffect(() => {
        filterDatabyId(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(user)


    const navigate = useNavigate()
    
    return (
        <>
        <Navbar/>
        <div className='details-cont'>
        <h4 className='conoce'>Conoce a tu compañero</h4>
        <section className='details'>
            <div className='aliado-contratar'>
                <div className='picture'>
                <img src={user.url2} alt=''/>
                </div>
                <p>Calificación: {user.valoration}</p>
                {
                    isLoggedIn ? 
                        <button onClick={()=> navigate("/servicio-contratar")}>Contratar</button>
                    : <Link style={{fontSize:"0.8rem"}} to="/ingresar">Inicia sesión para contratar</Link>
                }
            </div>
            <div className='aliado-info'>
                <div className='images-aliado'>
                    <p>Trabajos realizados</p>
                    <img src={picture} alt="" />
                </div>
                    <p className='aliado-name'>{user.namejob}</p>
                    <p className='aliado-desc'>{user.description}</p>
                    <p>Tarifa: A convenir</p>
            </div>
            <div className='contact'>
                <h4>¡Házle saber a Jesús que quieres contactarte con él!</h4>
                <img src={contact} alt="" style={{width:"300px"}} />
                <a style={{padding:"10px 20px", background:"#0d80a3", color:"white", borderRadius:"10px"}} target="_blank" rel='noreferrer' href={`https://wa.me/${number}?text=Hola,%20me%20gustaría%20conectar%20contigo`}>Conectar por WhatsApp</a>
            </div>
        </section>
        </div>
        <Footer/>
        </>
        
        // <div>
        //     <Navbar/>
        //     <h4>Conoce a tu aliado</h4>
        //     <div className='all-detail'>
        //     <div className='detail-cont'>
        //         <main>
        //             <picture className='picture-aliado'>
        //                 <img className='ali-img' src={photo} alt=''/>
        //             </picture>
        //             <p>Calificación: 6.9</p>
        //             <button>Contratar</button>
        //         </main>
        //         <aside>
                    // <div>
                    // <p>Trabajos realizados</p>
                    // <img src={picture} alt="" />
                    // </div>
                    // <p>Jesus Gonzales, 32</p>
                    // <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, ex. Inventore perferendis excepturi praesentium at minima nesciunt repudiandae voluptatum veniam repellat, amet mollitia cumque dolor corrupti quod ipsa ipsum eaque!</p>
                    // <p>Tarifa: A convenir</p>
        //         </aside>
        //     </div>
        //     <div className='contact-cont'>
        //         <div>WHATSAPP</div>
        //     </div>
        //     </div>
        //     <Footer/>
        // </div>
    )
}

export default Detail