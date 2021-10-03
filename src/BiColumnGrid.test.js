import React from 'react';
import { render } from '@testing-library/react';
import BiColumnGrid from './components/BiColumnGrid'

test('to check if BiColumnGrid component return first row', () => {
    const {getAllByText} = render(
      <BiColumnGrid row1 = "Name" row2 = "Dog" />
    );
    expect(getAllByText(/name/i)).toHaveLength(1)
});

test('to check if BiColumnGrid component return second row', () => {
  const {getAllByText} = render(
    <BiColumnGrid row1 = "Name" row2 = "Dog" />
  );
  expect(getAllByText(/Dog/i)).toHaveLength(1)
});