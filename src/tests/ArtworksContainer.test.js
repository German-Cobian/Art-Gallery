import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import ArtworksContainer from '../components/ArtworksContainer';
import store from '../redux/store';

describe('ArtworksContainer component', () => {
  test('matches ArtworksContainer component snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ArtworksContainer />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
