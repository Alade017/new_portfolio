import { render, screen, within } from '@testing-library/react';
import App from './App';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders the main portfolio heading', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /hi, i am ibrahim abdulmalik/i,
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
});
