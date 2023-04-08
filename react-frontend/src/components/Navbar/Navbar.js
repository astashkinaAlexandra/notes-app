import {AiOutlineHome} from 'react-icons/ai'
import {IoLogOutOutline, IoMoonOutline} from 'react-icons/io5'
import './Navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <nav>
            <div className="logo-name">
                <div className="logo-img">
                    <img src={logo} alt="logo"/>
                </div>
                <span className="logo_name">noteme</span>
            </div>
            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                        <a href="#">
                            <AiOutlineHome className="icon"></AiOutlineHome>
                            <span className="link-name">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiOutlineHome className="icon"></AiOutlineHome>
                            <span className="link-name">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiOutlineHome className="icon"></AiOutlineHome>
                            <span className="link-name">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiOutlineHome className="icon"></AiOutlineHome>
                            <span className="link-name">Dashboard</span>
                        </a>
                    </li>
                </ul>
                <ul className="logout-mode">
                    <li>
                        <a href="#">
                            <IoLogOutOutline className="icon"></IoLogOutOutline>
                            <span className="link-name">Logout</span>
                        </a>
                    </li>
                    <li className="mode">
                        <a href="#">
                            <IoMoonOutline className="icon"></IoMoonOutline>
                            <span className="link-name">Dark Mode</span>
                        </a>
                        <div className="mode-toggle">
                            <span className="switch"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
