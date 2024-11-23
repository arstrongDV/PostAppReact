import { render, screen } from '@testing-library/react';
import MainAppRender from './App';

test('renders learn react link', () => {
  render(<MainAppRender />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
