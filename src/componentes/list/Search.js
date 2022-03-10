import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../../styles/search.css"

const Search = () => {
    const {jobsList} = useSelector((state) => state.listjobs);
    const dispatch = useDispatch();
    const formik = useFormik({
      initialValues: {
        categoria: "",
        tarifa:"",
        evaluacion:""
      },
      onSubmit: (data) => {
      }
    });
    // const filtrar = (obj)=>{
    //     let jobs = []
    //     if(obj.categoria.lenght > 0 && jobsList.lenght > 0){
    //         let newJobs = jobsList.filter((job) => job.jobstype === obj.categoria)
    //     }
    //     if(obj.tarifa.lenght > 0 && jobsList.lenght > 0){
    //         let newJobs = jobsList.filter((job) => job.type === obj.tarifa)
    //     }
    //     if(obj.categoria.lenght > 0 && jobsList.lenght > 0){
    //         let newJobs = jobsList.filter((job) => job.type === obj.categoria)
    //     }
    // }
    return (
        <div className="search-cont">
            <h5 className='advance-tittle'>Búsqueda por ubicación</h5>
            <form className='search-form'>
                <select className='select' name='categorias' id='categorias'>
                    <option hidden selected>Categorías</option>
                    <option value="Construcción">Construcción</option>
                    <option value="Carpintería">Carpintería</option>
                    <option value="Soldadura">Soldadura</option>
                    <option value="Pintura">Pintura</option>
                    <option value="Eléctricidad">Eléctricidad</option>
                </select>
                <select className='select' name="evaluacion" id="evaluacion">
                    <option value="" hidden selected>Busca por evaluación</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <select className='select' name="tarifa" id="tarifa">
                    <option hidden selected>Tipo de tarifa</option>
                    <option value="Por hora">Por hora</option>
                    <option value="Por día">Por día</option>
                    <option value="A convenir">A convenir</option>
                </select>
                <button className='searchBtn' type='submit'>Filtrar resultados</button>
            </form>
        </div>
    )
}

export default Search