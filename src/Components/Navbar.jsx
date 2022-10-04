import './Navbar.css';
import CartWidget from './CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="Navbar">
            <h1 className="Navbar-h1">
                <NavLink to='/' className="Navbar-a Navbar-companyname">Caelum</NavLink>
            </h1>
                <nav>
                    <ul className="Navbar-ul">
                        <li className="Navbar-li"><NavLink to='/' className="Navbar-a">Home</NavLink></li>
                        <li className="Navbar-li"><NavLink to='/Quienesomos' className="Navbar-a">Quienes Somos</NavLink></li>
                        <li className="Navbar-li"><NavLink to='/Catalogo/salado' className="Navbar-a">Catalogo Salado</NavLink></li>
                        <li className="Navbar-li"><NavLink to='/Catalogo/dulce' className="Navbar-a">Catalogo Dulce</NavLink></li>
                        <li className="Navbar-li"><NavLink to='/cart' className="Navbar-a"><CartWidget /> </NavLink></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar