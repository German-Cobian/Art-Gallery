import React from 'react';
import ArtworkDetails from './ArtworkDetails';

const ArtworkDetailsContainer = () => (
  <div className="d-flex flex-column my-5">
    <div className="border-bottom">
      <h2>ArtworkDetailsContainer Component</h2>
    </div>
    <div className="border-bottom">
      <ArtworkDetails />
    </div>
  </div>
);

export default ArtworkDetailsContainer;
