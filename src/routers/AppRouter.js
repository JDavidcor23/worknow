import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from '../componentes/Login/Login';
// import Register from '../Pages/Register/Register';
import DashboardRoutes from './DashboardRoutes';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useDispatch } from "react-redux";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { loginSincrono } from '../actions/actionLogin';
import Home from "../componentes/home/Home"
import Register from '../componentes/Register/Register';
import HowDoesItWorks from '../componentes/home/HowDoesItWorks';
import List from '../componentes/list/List';

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
         setIsLoggedIn(true)
         dispatch(loginSincrono(user.uid,user.displayName))
        }
        else{
        setIsLoggedIn(false)
        }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIsLoggedIn])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/como-funciona" element={<HowDoesItWorks/>}/>
        <Route path="/listado" element={<List/>}/>
        <Route path="/ingresar" element={
        <PublicRoute isAuthenticated={isLoggedIn}>
            <Login/> 
        </PublicRoute>}/>
        <Route path="/registro" element={
        <PublicRoute isAuthenticated={isLoggedIn}>
            <Register/>
        </PublicRoute>
        }/> 
        <Route path="/*" element={
          <PrivateRoute isAuthenticated={isLoggedIn}>
              <DashboardRoutes/>
          </PrivateRoute>
          }/>
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

