import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchArtworks } from '../redux/artworksApi';
import ArtworkDetails from './ArtworkDetails';
/* eslint-disable eqeqeq */

const ArtworkDetailsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtworks());
  }, []);

  const artworksState = useSelector((state) => state.artworksReducer);
  const { id } = useParams();

  const filteredArtworks = artworksState.filter((artwork) => artwork.id == id);

  return (
    <div className="artworkdetails">
      { filteredArtworks.map((item) => (
        <ArtworkDetails
          key={item.id}
          id={item.id}
          image={item.image_id}
          title={item.title}
          type={item.artwork_type_title}
          medium={item.medium_display}
          dimensions={item.dimensions}
          date={item.date_display}
          artist={item.artist_title}
          from={item.place_of_origin}
          category={item.department_title}
        />
      ))}
    </div>
  );
};

export default ArtworkDetailsContainer;
