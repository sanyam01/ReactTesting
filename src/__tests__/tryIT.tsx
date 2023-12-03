import { render, screen } from "@testing-library/react";
import Greed from '../components/greed/Greed';
import React from 'react';
// it is an alternative to the  test
it('Cgreed renders correctly', () => {
    render(<Greed />);
    const check = screen.getByText(/hello/i);
    expect(check).toBeInTheDocument();
});

// fit is an alternative to test.only
fit('greed renders with name correctly', () => {
    render(<Greed name="sanyam"/>);
    const check = screen.getByText(/hello/i);
    expect(check).toBeInTheDocument();
});