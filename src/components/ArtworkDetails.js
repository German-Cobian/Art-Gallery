import React from 'react';
import PropTypes from 'prop-types';

const ArtworkDetails = (props) => {
  const {
    id, image, title, date, type, dimensions, medium, category, artist, from,
  } = props;

  const painting = `https://www.artic.edu/iiif/2/${image}/full/400,/0/default.jpg`;

  return (
    <div className="div-detailed-card" key={id}>
      <img src={painting} className="" alt="artwork" />
      <p className="">{title}</p>
      <p className="">{type}</p>
      <p className="">{medium}</p>
      <p className="">{dimensions}</p>
      <p className="">{date}</p>
      <p className="">{artist}</p>
      <p className="">{from}</p>
      <p className="">{category}</p>
    </div>
  );
};

ArtworkDetails.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  dimensions: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ArtworkDetails;
