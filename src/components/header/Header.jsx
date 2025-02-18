import './header.scss'
import Robot from '../../assets/homepage/svg/Robot.svg'
import Nav from './nav/Nav'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Robot} alt="Robot" className="header-logo__img" />
        <h1 className="header-logo__title">Artificial Intelligence</h1>
      </div>
      <Nav />
      <Link to="/SignIn" className="header-btn">Sign In</Link>
      <Link to="/SignUp" className="header-btn">Sign Up</Link>
    </header>
  )
}

export default Header