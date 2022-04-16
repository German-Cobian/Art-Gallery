import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArtworkDetailsMock from './mocks/ArtworkDetailsMock';

describe('ArtworkDetails component functionality', () => {
  test('should render ArtworkDetails component correctly', () => {
    const component = render(
      <ArtworkDetailsMock
        id="93798"
        title="Picture of Dorian Gray"
        type="Painting"
        medium="Oil on canvas"
        dimensions="215.9 × 106.7 cm (85 × 42 in.)"
        date="1943-44"
        artist="Ivan Albright"
        from="United States"
        category="Arts of the Americas"
      />,
    );
    expect(component.container).toHaveTextContent('Picture of Dorian Gray');
    expect(component.container).toHaveTextContent('Painting');
    expect(component.container).toHaveTextContent('Oil on canvas');
    expect(component.container).toHaveTextContent('Ivan Albright');
    expect(component.container).toHaveTextContent('United States');
  });
  test('should not render wrong information', () => {
    const component = render(
      <ArtworkDetailsMock
        id="93798"
        title="Picture of Dorian Gray"
        type="Painting"
        medium="Oil on canvas"
        dimensions="215.9 × 106.7 cm (85 × 42 in.)"
        date="1943-44"
        artist="Ivan Albright"
        from="United States"
        category="Arts of the Americas"
      />,
    );
    expect(component.container).not.toHaveTextContent('Not an artwork title');
    expect(component.container).not.toHaveTextContent('Not an artwork type');
    expect(component.container).not.toHaveTextContent('Not an artwork medium');
    expect(component.container).not.toHaveTextContent('Not an artist');
    expect(component.container).not.toHaveTextContent('Not a provenance');
  });
});
