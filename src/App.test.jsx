import { render, screen, within } from '@testing-library/react';
import App from './App';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders the main portfolio heading', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /ibrahim abdulmalik/i,
      })
    ).toBeInTheDocument();
  });

  it('renders the primary navigation links', () => {
    render(<App />);

    const navigation = screen.getByRole('navigation', { name: /main navigation/i });

    expect(within(navigation).getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: /about me/i })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders the selected work section with project cards', () => {
    render(<App />);

    expect(screen.getByText(/selected work/i)).toBeInTheDocument();
    expect(screen.getByText(/brooks lawn service/i)).toBeInTheDocument();
    expect(screen.getByText(/password generator/i)).toBeInTheDocument();
  });

  it('shows descriptive skill ranks instead of percentage scores', () => {
    render(<App />);

    const skills = document.querySelector('#skills');
    if (!(skills instanceof HTMLElement)) {
      throw new Error('Skills section was not found');
    }

    expect(within(skills).getAllByText('Beginner').length).toBeGreaterThan(0);
    expect(within(skills).getAllByText('Intermediate').length).toBeGreaterThan(0);
    expect(within(skills).getAllByText('Expert').length).toBeGreaterThan(0);
    expect(within(skills).queryByText(/\d+%/)).not.toBeInTheDocument();
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
    const contact = container.querySelector('#contact');

    if (!(sidebar instanceof HTMLElement) || !(contact instanceof HTMLElement)) {
      throw new Error('Sidebar or contact section was not found');
    }

    for (const section of [sidebar, contact]) {
      expect(within(section).queryByRole('link', { name: /facebook|instagram/i })).not.toBeInTheDocument();
    }
  });
});
