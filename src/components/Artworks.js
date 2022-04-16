import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artworks = (props) => {
  const {
    id, title, image, artist,
  } = props;

  const painting = `https://www.artic.edu/iiif/2/${image}/full/200,/0/default.jpg`;

  return (
    <>
      <Link to={`/artworkdetails/${id}`} key={id} id={id} className="col-6 border">
        <div className="d-flex flex-row justify-content-between my-3 mx-5" key={id}>
          <img src={painting} className="" height="120" width="120" alt="artwork" />
          <div>
            <p><i className="fa fa-arrow-circle-o-right float-end mx-5" aria-hidden="true" /></p>
            <p className="text-end mx-5">{title}</p>
            <p className="text-end mx-5">{artist}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

Artworks.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Artworks;
