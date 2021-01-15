import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../components/Header';

describe('Header tests', () => {
  it('should render the header', () => {
    render(<Header />);
    const headerElement = screen.getByText(/chrome-simple-start/i);
    expect(headerElement).toBeInTheDocument();
  })
  
})
