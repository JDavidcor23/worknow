import React from 'react'
import "../../styles/search.css"

const Search = () => {
    return (
        <div className="search-cont">
            <h5 className='advance-tittle'>Búsqueda avanzada</h5>
            <form className='search-form'>
                <input className='input' placeholder='  Buscar término'/>
                <select className='select' name='categorias' id='categorias'>
                    <option hidden selected>Categorías</option>
                    <option value="">Construcción</option>
                    <option value="">Carpintería</option>
                    <option value="">Soldadura</option>
                    <option value="">Pintura</option>
                    <option value="">Eléctricidad</option>
                </select>
                <input className='input' type="text" placeholder='  Etiquetas'/>
                <select className='select' name="evaluacion" id="evaluacion">
                    <option value="" hidden selected>Busca por evaluación</option>
                    <option value="">5</option>
                    <option value="">4</option>
                    <option value="">3</option>
                    <option value="">2</option>
                    <option value="">1</option>
                </select>
                <select className='select' name="tarifa" id="tarifa">
                    <option hidden selected>Tipo de tarifa</option>
                    <option value="">Por hora</option>
                    <option value="">Por día</option>
                    <option value="">Por obra</option>
                </select>
                <button className='searchBtn' type='submit'>Filtrar resultados</button>
            </form>
        </div>
    )
}

export default Search