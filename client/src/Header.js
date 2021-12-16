import logo from './todaysmovie_logo.png';
import './Header.css';

const Header = () => {
    return (
            <div className="logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
    )
}

export default Header