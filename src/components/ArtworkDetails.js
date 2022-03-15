import React from 'react';
import PropTypes from 'prop-types';

const ArtworkDetails = (props) => {
  const {
    id, image, title, date, type, dimensions, medium, category, artist, from,
  } = props;

  const painting = `https://www.artic.edu/iiif/2/${image}/full/400,/0/default.jpg`;

  return (
    <div className="div-detailed-card" key={id}>
      <img src={painting} className="mt-5" alt="artwork" />
      <div className="mx-5 my-5">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row" className="text-start">Title:</th>
              <td className="text-start">{title}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Type of Artwork:</th>
              <td className="text-start">{type}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Medium:</th>
              <td className="text-start">{medium}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Dimensions:</th>
              <td className="text-start">{dimensions}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Date of Composition:</th>
              <td className="text-start">{date}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Artist:</th>
              <td className="text-start">{artist}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Country of Origin:</th>
              <td className="text-start">{from}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Art Category:</th>
              <td className="text-start">{category}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
          </tbody>
        </table>
      </div>
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
