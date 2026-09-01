import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the primary sections and contact link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /music/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute(
    'href',
    'mailto:kintond15@berkeley.edu'
  );
});
