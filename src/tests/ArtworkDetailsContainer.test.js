import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import ArtworkDetailsContainer from '../components/ArtworkDetailsContainer';
import store from '../redux/store';

describe('ArtworkDetailsContainer component', () => {
  test('matches ArtworkDetailsContainer component snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ArtworkDetailsContainer />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
