import React from 'react';
import {toggleNav} from '../actions/environmentActions'
import {Link} from 'react-router-dom'
const NavBar = ({app, auth, dispatch}) => {
  
  return(
<div className="Navbar">
   <Link to="/"className="Navbar__Link Navbar__Link-brand">
      Website title
    </Link>
    <div className="Navbar__Link Navbar__Link-toggle" onClick={() => dispatch(toggleNav())}>
    <i className="fas fa-bars"></i>
    </div>
  {/* <nav className={app.isOpen ? "Navbar__Items Navbar__ToggleShow" : "Navbar__Items"}>
    <div className="Navbar__Link">
      Longer Link
    </div>
    <div className="Navbar__Link">
      Longer Link
    </div>
    <div className="Navbar__Link">
      Link
    </div>
  </nav> */}
  <nav className={app.isOpen ?"Navbar__Items Navbar__Items--right Navbar__ToggleShow" : "Navbar__Items Navbar__Items--right"}>
  {
  auth.isAuth ? 
  <React.Fragment>
  <Link to="/feed" className="Navbar__Link">
    Feed
  </Link>
  <Link to={`/profiles/${auth.email}` }className="Navbar__Link">
    {auth.email}
  </Link>
  <Link to='/logout'
  className="Navbar__Link">
    Logout
  </Link>
  </React.Fragment>
  :
  <React.Fragment>
  
    <Link to="/modals" className="Navbar__Link">
      Modal Page
    </Link>
    </React.Fragment>}
  </nav>
  
</div>
  )
}

export default NavBar