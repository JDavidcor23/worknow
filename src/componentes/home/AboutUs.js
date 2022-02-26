import React from 'react'
import "../../styles/aboutUs.css"
import painter from "../../resources/painter.jpg"

const AboutUs = () => {
    return (

        <div className='about-cont' id='nosotros'>
            <h2 className="subtitle">Nosotros</h2>
            <picture className="imgSm" >
                <img src='https://img.freepik.com/foto-gratis/apuesto-carpintero-trabajando-madera_1157-26134.jpg?t=st=1645222887~exp=1645223487~hmac=1a7fbd6b3831bbb6fa9e89ae1b62f842bc4dfde6235ac41b11ba7c1d73be075a&w=740' alt='' />
            </picture>
            <div className='second-col'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque, rem a blanditiis, in, repellat nostrum perferendis maiores cupiditate libero nihil eos eius dolorem quisquam provident aperiam tempore modi obcaecati.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque, rem a blanditiis, in, repellat nostrum perferendis maiores cupiditate libero nihil eos eius dolorem quisquam provident aperiam tempore modi obcaecati.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque, rem a blanditiis, in, repellat nostrum perferendis maiores cupiditate libero nihil eos eius dolorem quisquam provident aperiam tempore modi obcaecati.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque, rem a blanditiis, in, repellat nostrum perferendis maiores cupiditate libero nihil eos eius dolorem quisquam provident aperiam tempore modi obcaecati.</p>
            </div>
            <picture className="imgLg">

                <img src={painter} alt='' />
            </picture>
        </div>
    )
}

export default AboutUs