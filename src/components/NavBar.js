import React from 'react';

const NavBar = () => (
  <div className="d-flex flex-row justify-content-between border-bottom">
    <button type="button" className="btn btn-light" onClick={() => { window.location.href = '/'; }}>
      <h2 className="mx-5">{'<'}</h2>
    </button>
    <p className="col-6 mt-3">View Works In Our Collection</p>
    <span className="mic"><i className="fa fa-microphone mt-3" aria-hidden="true" /></span>
    <span><i className="fa fa-cog mx-5 mt-3" aria-hidden="true" /></span>
  </div>
);

export default NavBar;
