import React from 'react';
import { render, screen } from '@testing-library/react';

import Resources from '../components/Resources';
import { IResource } from '../config/config';

describe('Resources test', () => {
  const resources: IResource[] = [
    {
      category: 'category 1',
      links: [
        { text: 'link 1 of 1', url: 'http://www.google.com' },
        { text: 'link 1 of 2', url: 'http://www.google.com' },
        { text: 'link 1 of 3', url: 'http://www.google.com' },
      ],
    },
    {
      category: 'category 2',
      links: [
        { text: 'link 2 of 1', url: 'http://www.google.com' },
        { text: 'link 2 of 2', url: 'http://www.google.com' },
        { text: 'link 2 of 3', url: 'http://www.google.com' },
      ],
    },
  ];

  beforeEach(() => {
    render(<Resources resources={resources} />);
  });

  it('should render resource categories appropriately', () => {
    const resource1Category = screen.getByText(/category 1/i);
    const resource2Category = screen.getByText(/category 2/i);

    expect(resource1Category).toBeInTheDocument();
    expect(resource2Category).toBeInTheDocument();
  });

  it('should render all links', () => {
    const links = screen.getAllByText(/link [1,2] of [1-3]/i);

    expect(links.length).toBe(6);
  });
});
