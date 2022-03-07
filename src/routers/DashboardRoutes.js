import {Routes, Route, Navigate
} from 'react-router-dom';
import Aliado from '../componentes/Aliado/Aliado';
import FirstStep from '../componentes/process/FirstStep';
import Perfil from '../componentes/Perfil/Perfil';


const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/aliado" element={<Aliado/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path='/*' element={<Navigate to="/" />} />
            <Route path='/servicio-contratar' element={<FirstStep/>} />
        </Routes>
    );
};

export default DashboardRoutes;
