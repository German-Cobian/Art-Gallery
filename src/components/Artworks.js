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
        <div className="my-3" key={id}>
          <div>
            <img src={painting} className="" height="120" width="120" alt="artwork" />
            <h4 className="">{title}</h4>
            <h4 className="">{artist}</h4>
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
