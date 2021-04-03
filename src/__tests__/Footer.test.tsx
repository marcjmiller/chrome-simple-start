import React from 'react';
import { screen, render } from '@testing-library/react';

import Footer from '../components/Footer';

describe('Footer tests', () => {
  it('should render the footer container', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer-container');
    expect(footerElement).toBeInTheDocument();
  });
});
