import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import App from '../App';

test('renders the page title properly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/dog lover/i)).toBeInTheDocument();
});

test('renders the reload list button', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/reload list/i)).toBeInTheDocument();
});

test('renders the imperial radio button', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/imperial/i)).toBeInTheDocument();
});

test('renders the metric radio button', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/metric/i)).toBeInTheDocument();
});

test('tests reload button', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const btn = queryByTitle("reloadButton")
  const div = queryByTitle("imagesTitle")
  fireEvent.click(btn)
  expect(div.innerHTML).toMatch(/CircularProgress/);
});