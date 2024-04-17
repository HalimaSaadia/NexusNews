import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Marque from '../pages/Home/Marque/Marque';
import Footer from '../shared/Footer/Footer';

const Root = () => {
    const location = useLocation()
    return (
        <div>
           
            <Navbar />
            {location?.pathname==="/" && <Marque />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;