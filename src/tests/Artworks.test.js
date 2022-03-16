import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArtworksMock from './mocks/ArtworksMock';

describe('Artworks component functionality', () => {
  test('should render Artworks component correctly', () => {
    const component = render(
      <ArtworksMock
        id="93798"
        title="Picture of Dorian Gray"
        artist="Ivan Albright"
      />,
    );
    expect(component.container).toHaveTextContent('Picture of Dorian Gray');
    expect(component.container).toHaveTextContent('Ivan Albright');
  });
  test('should not render wrong information', () => {
    const component = render(
      <ArtworksMock
        id="93798"
        title="Picture of Dorian Gray"
        artist="Ivan Albright"
      />,
    );
    expect(component.container).not.toHaveTextContent('Not an artwork title');
    expect(component.container).not.toHaveTextContent('Not an artist');
  });
});