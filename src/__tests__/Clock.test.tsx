import React from 'react';
import { screen, render } from '@testing-library/react';

import Clock from '../components/Clock';

describe('Clock tests', () => {
  it('should render a clock container', () => {
    render(<Clock dateInput={new Date('December 17, 1995 03:24:00')} />);
    const clockElement = screen.getByTestId('clock-container');
    const clockString = screen.getByText(/it is currently 3:24 am on 17 december/i);
    expect(clockElement).toBeInTheDocument();
    expect(clockString).toBeInTheDocument();
  });
});
