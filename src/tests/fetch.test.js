import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import store from '../redux/store';

describe('Fetch from the artworksApi', () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  jest.setTimeout(30000);
  test('shows one correct artwork title that comes from the artworksApi', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    await act(() => sleep(4000));
    expect(await findByText('Picture of Dorian Gray')).toBeInTheDocument();
  });

  test('shows that the wrong artwork title is not displayed ', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    await act(() => sleep(4000));
    expect(queryByText('Mona Lisa')).not.toBeInTheDocument();
  });

  test('shows that the wrong artist is not displayed ', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    await act(() => sleep(4000));
    expect(await queryByText('Leonardo da Vinci')).not.toBeInTheDocument();
  });
});
