import React from 'react';
import PropTypes from 'prop-types';

const Artworks = (props) => {
  const {
    id, title, artist,
  } = props;

  return (
    <>
      <div id={id}>
        <div>
          <p><i className="fa fa-arrow-circle-o-right float-end mx-5" aria-hidden="true" /></p>
          <p>{title}</p>
          <p>{artist}</p>
        </div>
      </div>
    </>
  );
};

Artworks.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Artworks;
