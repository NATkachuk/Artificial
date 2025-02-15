import './header.scss'
import Robot from '../../assets/homepage/svg/Robot.svg'
import Nav from './nav/Nav'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Robot} alt="Robot" className="header-logo__img" />
        <h1 className="header-logo__title">Artificial Intelligence</h1>
      </div>
      <Nav />
      <button className="header-btn">Sign In</button>
    </header>
  )
}

export default Header