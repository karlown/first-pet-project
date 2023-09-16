import { NavLink, Outlet } from "react-router-dom"
import "../App.css"
import {FaGithub} from "react-icons/fa"

const  Layout = () => {
    return (
        <div>

<header>
<NavLink to="/" className="header-item">Menu</NavLink>
  <NavLink to="/about" className="header-item">About me</NavLink>
  <NavLink to="/Sliders" className="header-item">Sliders</NavLink>
  <NavLink to="/registration" className="header-item">Log in</NavLink>
  </header>
  
  <Outlet />
  <footer className="footer">
      <div className="contain">
        <div className="col">
          <h1>Company</h1>
        </div>
        <div className="col">
          <h1>Products</h1>
        </div>
        <div className="col">
          <h1>Accounts</h1>
        </div>
        <div className="col">
          <h1>Resources</h1>
        </div>
        <div className="col">
          <h1>Support</h1>
        </div>
        <div className="col social">
          <h1>Social</h1>
          <ul>
            <li>
                <i className="linkedin"></i>
            </li>
            <li>
                <a className="link" href="https://github.com/karlown"><FaGithub /></a>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
      </footer>
    </div>
    
    )
}
export {Layout}