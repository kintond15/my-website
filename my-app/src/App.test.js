import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page links and contact on the homepage', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /experience/i })).toHaveAttribute(
    'href',
    '#/experience'
  );
  expect(screen.getByRole('link', { name: /music/i })).toHaveAttribute(
    'href',
    '#/music'
  );
  expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute(
    'href',
    'mailto:kintond15@berkeley.edu'
  );
});
