import { render, screen } from "@testing-library/react";
import Greed from './Greed';
import React from 'react';
// checks if the element with "hello" text is present
// using the slash and i at the end, checks the hello irrespective of the case of the characters in the word
test('Cgreed renders correctly', () => {
    render(<Greed />);
    const check = screen.getByText(/hello/i);
    expect(check).toBeInTheDocument();
});

// we can pass the props to the components
// test.only will run only that test
test.only('greed renders with name correctly', () => {
    render(<Greed name="sanyam"/>);
    const check = screen.getByText(/hello/i);
    expect(check).toBeInTheDocument();
});