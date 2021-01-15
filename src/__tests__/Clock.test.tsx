import React from 'react'
import { screen, render } from '@testing-library/react';

import Clock from '../components/Clock';

describe('Clock tests', () => {
  it('should render a clock container', () => {
    render(<Clock />);
    const clockElement = screen.getByTestId('clock-container');
    expect(clockElement).toBeInTheDocument();
  })
  
})
