import {Routes, Route, Navigate
} from 'react-router-dom';
import Aliado from '../componentes/Aliado/Aliado';


const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/aliado" element={<Aliado/>}/>
            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    );
};

export default DashboardRoutes;
