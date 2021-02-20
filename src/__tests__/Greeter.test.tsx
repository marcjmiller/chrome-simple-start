import React from 'react';
import { render, screen } from '@testing-library/react';

import Greeter from '../components/Greeter';

describe('Greeter tests', () => {
  const username = 'Test User Please Ignore';

  beforeEach(() => {
    render(<Greeter username={username} />);
  });

  it('should render the username provided', () => {
    const greeter = screen.getByText(/hello, test user please ignore!/i);

    expect(greeter).toBeInTheDocument();
  });
});
