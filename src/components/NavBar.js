import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="d-flex flex-row justify-content-between border-bottom">
    <div className="mx-3">Art Institute of Chicago</div>
    <div>
      <NavLink to="/" activeClassName="active-link "><span className="mx-3">Artworks All</span></NavLink>
      <NavLink to="/ArtworkDetailsContainer" activeClassName="active-link "><span className="mx-3">ArtworkDetails</span></NavLink>
    </div>
  </div>
);

export default NavBar;
