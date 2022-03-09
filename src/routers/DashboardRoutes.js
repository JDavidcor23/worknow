import {Routes, Route, Navigate, useLocation
} from 'react-router-dom';
import FirstStep from '../componentes/process/FirstStep';
import Perfil from '../componentes/Perfil/Perfil';
import Process from '../componentes/process/Process';
import SecondStep from '../componentes/process/SecondStep';
import ThirdStep from '../componentes/process/ThirdStep';

const DashboardRoutes = () => {

    return (
        <Routes>
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path='/*' element={<Navigate to="/" />} /> 
            <Route path='/proceso/:id' element={<Process/>} />
            <Route path='/paso-1' element={<FirstStep/>} />
            <Route path='/paso-2' element={<SecondStep />} />
            <Route path='/paso-3' element={<ThirdStep/>} />

        </Routes>
    );
};

export default DashboardRoutes;
