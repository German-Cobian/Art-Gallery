import React from 'react';
import ArtworksHeader from './ArtworksHeader';
import Artworks from './Artworks';

const ArtworksContainer = () => (
  <div className="d-flex flex-column my-5">
    <div className="border-bottom">
      <ArtworksHeader />
    </div>
    <div className="border-bottom">
      <h2>Artworks Container Component</h2>
    </div>
    <div className="border-bottom">
      <Artworks />
    </div>
  </div>
);

export default ArtworksContainer;
