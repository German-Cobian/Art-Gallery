import axios from 'axios';

const SET_ARTWORKS = 'artworks/artworksReducer/SET_ARTWORKS';
const URL = 'https://api.artic.edu/api/v1/artworks/search?q=modern&size=60&fields=id,image_id,title,date_display,artwork_type_title,dimensions,medium_display,department_title,artist_title,place_of_origin';

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
