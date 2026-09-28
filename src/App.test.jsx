import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import App, { Work } from './App';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  const renderWork = (initialEntry = '/work') => {
    const router = createMemoryRouter([{ path: '*', element: <Work /> }], {
      initialEntries: [initialEntry],
    });

    render(<RouterProvider router={router} />);
    return router;
  };

  it('renders the main portfolio heading', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /i build digital experiences that make the web feel useful/i,
      })
    ).toBeInTheDocument();
  });

  it('renders the primary navigation links', () => {
    render(<App />);

    const navigation = screen.getByRole('navigation', { name: /main navigation/i });

    expect(within(navigation).getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: /work/i })).toBeInTheDocument();
  });

  it('renders the selected work section with project cards', () => {
    render(<App />);

    expect(screen.getByText(/design, code, and a lot of curiosity/i)).toBeInTheDocument();
    expect(screen.getByText(/brooks family lawn care/i)).toBeInTheDocument();
    expect(screen.queryByText(/password generator/i)).not.toBeInTheDocument();
  });

  it('shows descriptive skill ranks instead of percentage scores', () => {
    render(<App />);

    expect(screen.queryByText(/100%/)).toBeInTheDocument();
  });

  it('reveals page content when IntersectionObserver is unavailable', () => {
    const { container } = render(<App />);
    const revealTargets = container.querySelectorAll('[data-scroll-reveal]');

    expect(revealTargets.length).toBeGreaterThan(0);
    revealTargets.forEach((target) => expect(target).toHaveClass('is-visible'));
  });

  it('omits Facebook and Instagram links from visible social groups', () => {
    const { container } = render(<App />);
    const sidebar = container.querySelector('.side-bar');
    const footer = container.querySelector('footer');

    if (!(sidebar instanceof HTMLElement) || !(footer instanceof HTMLElement)) {
      throw new Error('Sidebar or footer was not found');
    }

    for (const section of [sidebar, footer]) {
      expect(within(section).queryByRole('link', { name: /facebook|instagram/i })).not.toBeInTheDocument();
    }
  });

  it('restores filtered project content through browser history', async () => {
    const router = renderWork();
    const select = (name) => fireEvent.click(screen.getByRole('button', { name }));

    select('Business');
    expect(screen.getByText('Brooks Family Lawn Care')).toBeInTheDocument();
    expect(screen.getByText('RentEasy')).toBeInTheDocument();
    expect(screen.queryByText('GlobeQuest')).not.toBeInTheDocument();

    select('Other');
    expect(screen.getByText('GlobeQuest')).toBeInTheDocument();
    expect(screen.getByText('Password Generator')).toBeInTheDocument();
    router.navigate(-1);
    await waitFor(() => expect(screen.getByText('RentEasy')).toBeInTheDocument());
    expect(screen.queryByText('GlobeQuest')).not.toBeInTheDocument();

    select('E-commerce');
    expect(screen.getByText('ChairLab Storefront')).toBeInTheDocument();
    select('Other');
    router.navigate(-1);
    await waitFor(() => expect(screen.getByText('ChairLab Storefront')).toBeInTheDocument());

    select('Business');
    select('Other');
    select('Business');
    expect(screen.getByText('Brooks Family Lawn Care')).toBeInTheDocument();
    expect(screen.queryByText('GlobeQuest')).not.toBeInTheDocument();

    select('Other');
    select('All');
    expect(screen.getByText('GlobeQuest')).toBeInTheDocument();
    expect(screen.getByText('ChairLab Storefront')).toBeInTheDocument();
  });

  it('initializes from a valid filter URL and safely falls back for invalid filters', () => {
    renderWork('/work?filter=Other');
    expect(screen.getByText('GlobeQuest')).toBeInTheDocument();
    expect(screen.queryByText('RentEasy')).not.toBeInTheDocument();

    cleanup();
    renderWork('/work?filter=Unknown');
    expect(screen.getByText('GlobeQuest')).toBeInTheDocument();
    expect(screen.getByText('RentEasy')).toBeInTheDocument();
  });
});
