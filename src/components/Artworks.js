import React from 'react';
import PropTypes from 'prop-types';

const Artworks = (props) => {
  const {
    id, title, image, artist,
  } = props;

  const painting = `https://www.artic.edu/iiif/2/${image}/full/200,/0/default.jpg`;

  return (
    <>
      <div className="" key={id}>
        <div>
          <img src={painting} className="" alt="artwork" />
          <h4 className="">{title}</h4>
          <h4 className="">{artist}</h4>
        </div>
      </div>
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
