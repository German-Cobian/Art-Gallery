import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArtworksHeader from './ArtworksHeader';
import Artworks from './Artworks';
import { fetchArtworks } from '../redux/artworksApi';

const ArtworksContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtworks());
  }, []);

  const artworksState = useSelector((state) => state.artworksReducer);

  return (
    <div className="artworks-container">
      <ArtworksHeader />
      <h6 className="text-start my-3 mx-5">DETAILS BY ARTWORK</h6>
      <div className="d-flex flex-wrap">

        { artworksState.map((item) => (
          <Artworks
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image_id}
            artist={item.artist_title}
          />

        ))}
      </div>
    </div>
  );
};

export default ArtworksContainer;
