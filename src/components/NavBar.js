import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="d-flex flex-row justify-content-between border-bottom">
    <NavLink to="/" activeClassName="active-link "><h1 className="arrow mx-5">{'<'}</h1></NavLink>
    <p className="col-6 mt-3">View Works In Our Collection</p>
    <span className="mic"><i className="fa fa-microphone mt-3" aria-hidden="true" /></span>
    <span><i className="fa fa-cog mx-5 mt-3" aria-hidden="true" /></span>
  </div>
);

export default NavBar;
