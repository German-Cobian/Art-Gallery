import axios from 'axios';

const SET_ARTWORKS = 'modern-art-gallery/artworksReducer/SET_ARTWORKS';
const baseURL = 'https://api.artic.edu/api/v1/artworks/search?q=';

const initialState = [];

const setArtworks = (payload) => ({
  type: SET_ARTWORKS,
  payload,
});

export const fetchArtworks = (category) => async (dispatch) => {
  const response = await axios.get(`${baseURL}${category}&size=100&fields=id,image_id,title,date_display,artwork_type_title,dimensions,medium_display,department_title,artist_title,place_of_origin'`);
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
