import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); 

test('Orhan appers on the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Orhan/i);
  expect(linkElement).toBeInTheDocument();
});
