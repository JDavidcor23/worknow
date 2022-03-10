import React from "react";
import "../../styles/search.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { jobsListSincrono } from "../../actions/actionJobsList";
const Search = () => {
  const dispatch = useDispatch();
  const { jobsList } = useSelector((state) => state.listjobs);
  const formik = useFormik({
    initialValues: {
      ciudad: "",
    },
    onSubmit: (data) => {
      filtrar(data.ciudad);
    },
  });
  const filtrar = (ciudad) => {
    let newjobs = jobsList.filter((job) =>
      job.city.toLowerCase().includes(ciudad.toLowerCase())
    );
    dispatch(jobsListSincrono(newjobs));
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
