import React from 'react';
import { render, screen } from '@testing-library/react';

import SettingsPopup from '../components/SettingsPopup';
import { defaultConfig } from '../config';

describe('SettingsPopup tests', () => {
  it('should render SettingsPopup', () => {
    render(<SettingsPopup config={defaultConfig} />);
    const subject = screen.getByText(/settings/i);
    expect(subject).toBeInTheDocument();
  });
});
