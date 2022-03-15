import React from 'react';
import Guernica from '../assets/Guernica.jpeg';

const ArtworksHeader = () => (
  <div className="d-flex flex-row">
    <div className="my-5 col-8">
      <img src={Guernica} alt="Guernica by Picasso" className="col-10" />
    </div>
    <div className="mt-5 col-6">
      <h2 className="text-start">Art Institute of Chicago</h2>
      <p className="text-start">60 awesome artworks</p>
    </div>
  </div>
);

export default ArtworksHeader;
