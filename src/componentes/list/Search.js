import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobsListSincrono } from "../../actions/actionJobsList";
import "../../styles/search.css";

const Search = () => {
  const { jobsList } = useSelector((state) => state.listjobs);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      ciudad: "",
    },
    onSubmit: (data) => {
      filtrar(data.ciudad);
    },
  });
  const filtrar = (ciudad) => {
    const newJobs = [];
    for (let i = 0; i < jobsList.length; i++) {
      if (jobsList[i].city.toLowerCase().includes(ciudad.toLowerCase())) {
        newJobs.push(jobsList[i]);
      }
      console.log(newJobs);
    }
    dispatch(jobsListSincrono(newJobs));
  };
  return (
    <div className="search-cont">
      <h5 className="advance-tittle">Búsqueda avanzada</h5>
      <form className="search-form" onSubmit={formik.handleSubmit}>
        <input type="text" name="ciudad" onChange={formik.handleChange} />
        <button className="searchBtn" type="submit">
          Filtrar resultados
        </button>
      </form>
    </div>
  );
};

export default Search;
