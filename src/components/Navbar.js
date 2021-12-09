import menu from "../Pictures/menu.png"
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [stil, setStyle] = useState("block!important");
  
  const changeStyle = () => {
    console.log("you just clicked");
    
    stil==="block!important"?setStyle("none!important"):setStyle("block!important");
    console.log(stil);
  };
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <NavLink className="navbar-brand" to="/">
                Mangulice
              </NavLink>
              <button className="navbar-toggler" type="button" onClick={changeStyle} >
                <span className="navbar-toggler-icon"><img src={menu} alt="" style={{width:"30px",height:"30px"}}/></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{display: {stil}}}
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Početna
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/oMangulicama"
                    >
                      O mangulicama
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/zdravlje"
                    >
                      Zdravlje
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/galerija"
                    >
                      Galerija
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/pitanja"
                    >
                      Pitanja
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/kontakt"
                    >
                      Kontakt
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
