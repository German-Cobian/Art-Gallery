import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import store from '../redux/store';

describe('store', () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  jest.setTimeout(30000);

  test('shows the correct text after the next state from the store that came from ArtworksContainer', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    await act(() => sleep(4000));
    expect(await findByText('DETAILS BY ARTWORK')).toBeInTheDocument();
  });

  test('shows the correct text after the next state from the store that came from NavBar ', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    await act(() => sleep(4000));
    expect(await findByText('View Works In Our Collection')).toBeInTheDocument();
  });
});
