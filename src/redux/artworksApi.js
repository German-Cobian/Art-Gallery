import axios from 'axios';

const SET_ARTWORKS = 'artworks/artworksReducer/SET_ARTWORKS';
const URL = 'https://api.artic.edu/api/v1/artworks/search?q=modern&size=12&fields=id,title,image_id,artist_title';

const initialState = [];

const setArtworks = (payload) => ({
  type: SET_ARTWORKS,
  payload,
});

export const fetchArtworks = () => async (dispatch) => {
  const response = await axios.get(URL);
  dispatch(setArtworks(response.data.data));
};

const artworksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTWORKS:
      return action.payload;
    default:
      return state;
  }
};

export default artworksReducer;
