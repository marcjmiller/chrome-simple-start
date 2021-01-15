import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../components/Search';

describe('Search tests', () => {
  it('should render the search container', () => {
    render(<Search />);
    const searchElement = screen.getByTestId('search-container');
  });
});
