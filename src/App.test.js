import { render, screen } from '@testing-library/react';
import App from './App';

test('check data shows in screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
test('check data shows in screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/here/i);
  expect(linkElement).toBeInTheDocument();
});
