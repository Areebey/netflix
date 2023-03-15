import logo from "../../Logo.png";
import React from 'react';
import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im";


const Header = () => {
  return  (
    <nav className="header">

      <img src={logo} alt="logo" />

      <div>

        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/tvshows">Tv Shows</Link>
      </div>

      <ImSearch/>


    </nav>
  )
}



export default Header