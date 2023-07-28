import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArtworksHeader from './ArtworksHeader';
import Artworks from './Artworks';
import { fetchArtworks } from '../redux/artworksApi';

const ArtworksContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const onChangeSearchBar = (e) => {
    setSearchValue(e.target.value.trim());
    if (e.target.value.trim().length > 0) dispatch(fetchArtworks(e.target.value.trim()));
  };

  useEffect(() => {
    dispatch(fetchArtworks());
  }, []);

  const artworksState = useSelector((state) => state.artworksReducer);

  return (
    <div className="artworks-container">
      <ArtworksHeader />
      <section className="d-flex flex-row justify_content-around" id="section__searchbar">
        <p className="mx-5">Up to 60 awesome artworks per search:</p>
        <input
          className="col-6"
          type="search"
          name="input__category"
          id="input__category"
          placeholder="Search term"
          onChange={onChangeSearchBar}
          value={searchValue}
        />
      </section>
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
