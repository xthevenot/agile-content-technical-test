import { fireEvent, getByTestId, screen, waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders basic elements for initial state', () => {
  render(<App />);
  //Google image
  const googleImage = screen.getByAltText('App logo');
  expect(googleImage).toBeInTheDocument();
  //Search input
  const searchInput = screen.getByLabelText('Search for animal type or name');
  expect(searchInput).toBeInTheDocument();
  //Search button
  const searchButton = screen.getByRole('button', {
    name: 'Search'
  });
  expect(searchButton).toBeInTheDocument();
});

test('a results list should be displayed after using search input', async () => {
  render(<App />);
  //Search input
  const searchInput = screen.getByLabelText('Search for animal type or name');
  fireEvent.change(searchInput, { target: { value: 'dog' } })
  //Search button
  const searchButton = screen.getByRole('button', {
    name: 'Search'
  });
  //The button is enabled after a 300ms delay, so we need to wait
  await waitFor(() => expect(screen.getByRole('button', {
    name: 'Search'
  })).not.toBeDisabled(), {
    timeout: 500,
  });
  fireEvent.click(searchButton);
  //Check if the <ul> exists
  await screen.findByTitle('Results list');
  const resultsList = screen.getByRole('list', {
    name: /results/i
  });
  expect(resultsList).toBeInTheDocument();
});
test('an error message should be displayed when no results', async () => {
  render(<App />);
  //Search input
  const searchInput = screen.getByLabelText('Search for animal type or name');
  fireEvent.change(searchInput, { target: { value: 'wrongvalue' } })
  //Search button
  const searchButton = screen.getByRole('button', {
    name: 'Search'
  });
  //The button is enabled after a 300ms delay, so we need to wait
  await waitFor(() => expect(screen.getByRole('button', {
    name: 'Search'
  })).not.toBeDisabled(), {
    timeout: 500,
  });
  fireEvent.click(searchButton);
  //Wait until the 'No results found' text appears
  await waitFor(() => expect(screen.findByTitle('No results found')), {
    timeout: 500,
  });
});
