import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { findArtworkById } from '../redux/artworksApi';
import ArtworkDetails from './ArtworkDetails';
/* eslint-disable eqeqeq */

const ArtworkDetailsContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(findArtworkById(id));
  }, []);

  const artworksState = useSelector((state) => state.artworksReducer);

  return (
    <div className="artworkdetails">
      <ArtworkDetails
        key={artworksState.id}
        id={artworksState.id}
        image={artworksState.image_id}
        title={artworksState.title}
        type={artworksState.artwork_type_title}
        medium={artworksState.medium_display}
        dimensions={artworksState.dimensions}
        date={artworksState.date_display}
        artist={artworksState.artist_title}
        from={artworksState.place_of_origin}
        category={artworksState.department_title}
      />
    </div>
  );
};

export default ArtworkDetailsContainer;
