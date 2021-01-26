import React from 'react';
import { render, screen } from '@testing-library/react';

import SettingsPopup from '../components/SettingsPopup';
import { defaultConfig } from '../config';

describe('SettingsPopup tests', () => {
  it('should render SettingsPopup', () => {
    render(<SettingsPopup config={JSON.parse(JSON.stringify(defaultConfig))} toggleShowSettings={jest.fn()} />);
    const subject = screen.getByText(/username/i);
    expect(subject).toBeInTheDocument();
  });
});
