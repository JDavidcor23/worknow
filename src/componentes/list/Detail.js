import React from "react";
import Navbar from "../home/Navbar";
import "../../styles/detail.css";
import Footer from "../home/Footer";
import contact from "../../resources/amigos.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";

const Detail = () => {
const [job, setJob] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [form, setForm] = useState(true);
const { partner } = useSelector((store) => store.partner);
const [whatsapp, setWhatsapp] = useState("");
const [isClicked, setIsClicked] = useState(false);

const getJobData = useSelector((watchjobs) => watchjobs.listjobs.jobsList);
let { id } = useParams();
const filterDatabyId = (id) => {
    const filterData = getJobData.filter((job) => job.id === id);
    setJob(filterData[0]);
};
useEffect(() => {
    filterDatabyId(id);
    const auth = getAuth();
    onAuthStateChanged(auth, (job) => {
    if (job?.uid) {
        setIsLoggedIn(true);
    } else {
        setIsLoggedIn(false);
    }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
const handleChange = ({ target }) => {
    let newvalue = target.value.replace(/ /g, "%20");
    setWhatsapp(newvalue);
};
const handleSubmit = (e) => {
    e.preventDefault();
};
const navigate = useNavigate();

const handleClick = () => {
    navigate(`/proceso/${id}`);
    setIsClicked(true);
};

return (
    <>
    <Navbar />
    <div className="details-cont">
        <h4 className="conoce">Conoce a tu partner</h4>
        <section className="details">
        <div className="aliado-contratar">
            {partner !== undefined && (
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <img
                src={partner.url}
                alt=""
                style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    border: "2px solid #00799e",
                    cursor: "pointer",
                    marginRight: "20px",
                }}
                />
                <div>
                <h3>{partner.name}</h3>
                <p>
                    {partner.city}, {partner.country}
                </p>
                </div>
            </div>
            )} 
            <div className="picture">
            <img src={job.url} alt="" style={{ objectFit: "cover" }} />
            </div>
            <p style={{fontWeight:"600"}}>Calificación: {job.valoration}</p>
            {isLoggedIn ? (
            <button onClick={() => handleClick()}>
                {isClicked === false ? "Contratar" : "Ver proceso"}
            </button>
            ) : (
            <Link style={{ fontSize: "0.8rem" }} to="/ingresar">
                Inicia sesión para contratar
            </Link>
            )}
        </div>
        <div className="aliado-info">
            <p className="aliado-name">{job.namejob}</p>
            <p className="aliado-desc">{job.description}</p>
            <p style={{fontSize:"0.9rem", fontWeight:"600"}}>Tarifa: {job.type}</p>
            {job.type !== "A convenir" && <p style={{fontSize:"0.9rem", fontWeight:"600"}}>Precio: {job.money}</p>}
        </div>
        {form ? (
            <div className="contact">
            <h4 style={{ textAlign: "center" }}>
                ¡Házle saber a {partner.name} que quieres contactarte con él!
            </h4>
            <img src={contact} alt="" style={{ width: "300px" }} />
            <button
                style={{
                padding: "10px 20px",
                background: "#0d80a3",
                color: "white",
                borderRadius: "10px",
                border: "none",
                width: "90%",
                cursor: "pointer",
                fontSize: "1.2rem",
                }}
                target="_blank"
                rel="noreferrer"
                onClick={() => setForm(!form)}
            >
                Conectar
            </button>
            </div>
        ) : (
            <div className="contact">
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit}
            >
                <label
                style={{
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    margin: "20px 0",
                    padding: "5px 5px 5px 10px",
                }}
                >
                Envíale un mensaje
                </label>
                <textarea
                style={{
                    borderRadius: "20px",
                    padding: "5px",
                    height: "200px",
                }}
                name="message"
                onChange={handleChange}
                ></textarea>
                <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    background: "#0d80a3",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    margin: "20px 0",
                    width: "100%",
                }}
                >
                {partner !== undefined ?
                <a
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noreferrer"

                    href={`https://wa.me/${partner.phone}?text=${whatsapp}`}
                >
                    Conectar por WhatsApp
                </a>
                :
                <a
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noreferrer"

                    href={`https://wa.me/?text=${whatsapp}`}
                >
                    Conectar por WhatsApp
                </a>

                }
                </button>
            </form>
            </div>
        )}
        </section>
    </div>
    <Footer />
    </>
);
};

export default Detail;




// import React from "react";
// import Navbar from "../home/Navbar";
// import "../../styles/detail.css";
// import Footer from "../home/Footer";
// import contact from "../../resources/amigos.png";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useSelector } from "react-redux";

// const Detail = () => {
// const [job, setJob] = useState([]);
// const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [form, setForm] = useState(true);
// const { partner } = useSelector((store) => store.partner);
// const [whatsapp, setWhatsapp] = useState("");
// const [isClicked, setIsClicked] = useState(false);

// const getJobData = useSelector((watchjobs) => watchjobs.listjobs.jobsList);
// let { id } = useParams();
// const filterDatabyId = (id) => {
//     const filterData = getJobData.filter((job) => job.id === id);
//     setJob(filterData[0]);
// };

// useEffect(() => {
//     filterDatabyId(id);
//     const auth = getAuth();
//     onAuthStateChanged(auth, (job) => {
//     if (job?.uid) {
//         setIsLoggedIn(true);
//     } else {
//         setIsLoggedIn(false);
//     }
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
// const handleChange = ({ target }) => {
//     let newvalue = target.value.replace(/ /g, "%20");
//     setWhatsapp(newvalue);
// };
// const handleSubmit = (e) => {
//     e.preventDefault();
// };
// const navigate = useNavigate();

// const handleClick = () => {
//     navigate(`/proceso/${id}`);
//     setIsClicked(true);
//     };

// return (
//     <>
//     <Navbar />
//     <div className="details-cont">
//         <h4 className="conoce">Conoce a tu partner</h4>
//         <section className="details">
//         <div className="aliado-contratar">
//             {partner !== undefined && (
//             <div
//                 style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 }}
//             >
//                 <img
//                 src={partner.url}
//                 alt=""
//                 style={{
//                     height: "40px",
//                     width: "40px",
//                     borderRadius: "50%",
//                     border: "2px solid #00799e",
//                     cursor: "pointer",
//                     marginRight: "20px",
//                 }}
//                 />
//                 <div>
//                 <h3>{partner.name}</h3>
//                 <p>
//                     {partner.city}, {partner.country}
//                 </p>
//                 </div>
//             </div>
//             )} 
//             <div className="picture">
//             <img src={job.url} alt="" style={{ objectFit: "cover" }} />
//             </div>
//             <p style={{fontWeight:"600"}}>Calificación: {job.valoration}</p>
//             {isLoggedIn ? (
//             <button onClick={() => handleClick()}>
//                 {isClicked === false ? "Contratar" : "Ver proceso"}
//             </button>
//             ) : (
//             <Link style={{ fontSize: "0.8rem" }} to="/ingresar">
//                 Inicia sesión para contratar
//             </Link>
//             )}
//         </div>
//         <div className="aliado-info">
//             <p className="aliado-name">{job.namejob}</p>
//             <p className="aliado-desc">{job.description}</p>
//             <p style={{fontSize:"0.8rem", fontWeight:"600"}}>Tarifa: {job.type}</p>
//             {job.type !== "A convenir" && <p>Precio: {job.money}</p>}
//         </div>
//         {form ? (
//             <div className="contact">
//             <h4 style={{ textAlign: "center" }}>
//                 ¡Házle saber a {partner.name} que quieres contactarte con él!
//             </h4>
//             <img src={contact} alt="" style={{ width: "300px" }} />
//             <button
//                 style={{
//                 padding: "10px 20px",
//                 background: "#0d80a3",
//                 color: "white",
//                 borderRadius: "10px",
//                 border: "none",
//                 width: "90%",
//                 cursor: "pointer",
//                 fontSize: "1.2rem",
//                 }}
//                 target="_blank"
//                 rel="noreferrer"
//                 onClick={() => setForm(!form)}
//             >
//                 Conectar
//             </button>
//             </div>
//         ) : (
//             <div className="contact">
//             <form
//                 style={{ display: "flex", flexDirection: "column" }}
//                 onSubmit={handleSubmit}
//             >
//                 <label
//                 style={{
//                     fontSize: "1.4rem",
//                     fontWeight: "bold",
//                     margin: "20px 0",
//                     padding: "5px 5px 5px 10px",
//                 }}
//                 >
//                 Envíale un mensaje
//                 </label>
//                 <textarea
//                 style={{
//                     borderRadius: "20px",
//                     padding: "5px",
//                     height: "200px",
//                 }}
//                 name="message"
//                 onChange={handleChange}
//                 ></textarea>
//                 <button
//                 type="submit"
//                 style={{
//                     padding: "10px 20px",
//                     background: "#0d80a3",
//                     borderRadius: "10px",
//                     border: "none",
//                     cursor: "pointer",
//                     fontSize: "1.2rem",
//                     margin: "20px 0",
//                     width: "100%",
//                 }}
//                 >
//                 {partner !== undefined ?
//                 <a
//                     style={{ color: "white" }}
//                     target="_blank"
//                     rel="noreferrer"

//                     href={`https://wa.me/${partner.phone}?text=${whatsapp}`}
//                 >
//                     Conectar por WhatsApp
//                 </a>
//                 :
//                 <a
//                     style={{ color: "white" }}
//                     target="_blank"
//                     rel="noreferrer"

//                     href={`https://wa.me/?text=${whatsapp}`}
//                 >
//                     Conectar por WhatsApp
//                 </a>

//                 }
//                 </button>
//             </form>
//             </div>
//         )}
//         </section>
//     </div>
//     <Footer />
//     </>
// );
// };

// export default Detail;
