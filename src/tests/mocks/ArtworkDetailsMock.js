import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable camelcase */

const Artwork = (props) => {
  const {
    id, title, date, type, dimensions, medium, category, artist, from,
  } = props;

  return (
    <div key={id}>
      <div>
        <table>
          <tbody>
            <tr>
              <th scope="row">Title:</th>
              <td>{title}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row">Type of Artwork:</th>
              <td>{type}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row">Medium:</th>
              <td>{medium}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row">Dimensions:</th>
              <td>{dimensions}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Date of Composition:</th>
              <td className="text-start">{date}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row">Artist:</th>
              <td>{artist}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row">Country of Origin:</th>
              <td>{from}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
            <tr>
              <th scope="row">Art Category:</th>
              <td>{category}</td>
              <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Artwork.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  dimensions: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Artwork;
