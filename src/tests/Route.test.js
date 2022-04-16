import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NavBar from '../components/NavBar';
import ArtworksContainer from '../components/ArtworksContainer';
import ArtworkDetailsContainer from '../components/ArtworkDetailsContainer';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../components/NavBar');
jest.mock('../components/ArtworksContainer');
jest.mock('../components/ArtworkDetailsContainer');

describe('Correct render of the routes', () => {
  test('Should render ArtworksContainer on home route', () => {
    ArtworksContainer.mockImplementation(() => <div>ArtworksContainerPageMock</div>);
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <ArtworksContainer />
      </MemoryRouter>,
    );
    expect(screen.getByText('ArtworksContainerPageMock')).toBeInTheDocument();
  });

  test('NavBar is on home route', () => {
    NavBar.mockImplementation(() => <div>NavBarPageMock</div>);
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <NavBar />
      </MemoryRouter>,
    );
    expect(screen.queryByText('NavBarPageMock')).toBeInTheDocument();
  });

  test('Should render ArtworkDetailsContainer on /details/:name route', () => {
    ArtworkDetailsContainer.mockImplementation(() => <div>ArtworkDetailsContainerMock</div>);
    render(
      <MemoryRouter initialEntries={['/details/:name']} initialIndex={0}>
        <ArtworkDetailsContainer />
      </MemoryRouter>,
    );
    expect(screen.queryByText('ArtworkDetailsContainerMock')).toBeInTheDocument();
  });
});
