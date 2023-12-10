import { render, screen } from '../../test-utils';
import { MuiMode } from './mui-mode';

describe('renders text corrextly', () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
})