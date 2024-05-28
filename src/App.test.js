import { render, screen } from '@testing-library/react';
import App from './App';

test('check data shows in screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/test not works/i);
  expect(linkElement).toBeInTheDocument();
});
test('check data shows in screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/  EX3 IN PROGRESS!!/i);
  expect(linkElement).toBeInTheDocument();
});
