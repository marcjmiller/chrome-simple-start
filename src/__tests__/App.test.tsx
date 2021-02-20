import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App.tsx tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render an icon to toggle showing settings', () => {
    const settingsToggle = screen.getByTestId('toggle-show-settings');
    expect(settingsToggle).toBeInTheDocument();
  });

  // This is currently disabled because the default config hides this information
  // it('should render the header text', () => {
  //   const headingContainer = screen.getByText(/chrome-simple-start/i);
  //   expect(headingContainer).toBeInTheDocument();
  // });

  it('should render the greeter text', () => {
    const greeterText = screen.getByText(/hello, marcjmiller!/i);
    expect(greeterText).toBeInTheDocument();
  });

  it('should render a clock container', () => {
    const clockContainer = screen.getByTestId('clock-container');
    expect(clockContainer).toBeInTheDocument();
  });

  it('should render a search container', () => {
    const searchContainer = screen.getByTestId('search-container');
    expect(searchContainer).toBeInTheDocument();
  });

  it('should render 5 resource containers', () => {
    const resourceElement = screen.getAllByTestId('resource');
    const resourceContainer = screen.getByTestId('resource-container');
    expect(resourceContainer).toBeInTheDocument();
    expect(resourceElement.length).toBe(5);
  });

  it('should render a footer container', () => {
    const footerContainer = screen.getByTestId('footer-container');
    expect(footerContainer).toBeInTheDocument();
  });
});
