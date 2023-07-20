import { NavLink, Outlet } from "react-router-dom"
import "../App.css"
const  Layout = () => {
    return (
        <div>
<header>
<NavLink to="/" className="header-item">Menu</NavLink>
  <NavLink to="/about" className="header-item">About me</NavLink>
  <NavLink to="/contacts" className="header-item">Contacts</NavLink>
  <NavLink to="/registration" className="header-item">Register</NavLink>
  </header>

  <Outlet />

<footer className="footer">2023</footer>
  </div>
    )
}
export {Layout}