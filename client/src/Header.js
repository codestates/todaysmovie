import logo from './logo.png';
import './Header.css';

export default function Header () {
  return (
    <div className="header">
    <div className="logo">
      <img src={logo} className="logoImage" alt="logo" />
      TODAY'S MOVIE
    </div>
    </div>
  )
}