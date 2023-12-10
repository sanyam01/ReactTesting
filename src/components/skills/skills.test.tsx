import { render, screen, logRoles } from '@testing-library/react';
import { Skills } from './skills';

describe('skills', () => {
    const skills = ['HTML', 'CSS', 'JS'];
    test('renders correctly', () => {
        render(<Skills skills={skills} />)
        // this finds the ul tag
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })

    test('renders a list of skills', () => {
        render(<Skills skills={skills} />);
        const allListItems = screen.getAllByRole('listitem');
        expect(allListItems).toHaveLength(skills.length);


    })

    test('renders login button', () => {
        render(<Skills skills={skills} />);
        const login = screen.getByRole('button', {
            name: 'Login'
        });
        expect(login).toBeInTheDocument();

    });


    test('Start learning button', () => {
        render(<Skills skills={skills} />);
        const start = screen.queryByRole('button', {
            name: 'Start Learning'
        });
        expect(start).not.toBeInTheDocument();

    });
    // queryByRole and getByRole will fail in this case, because of the 500ms delay
    // here findBy and findAllBy comes into picture
    test('Start learning button is eventually displayed',async () => {
      const  view =  render(<Skills skills={skills} />);
      logRoles(view.container);
        const start = await screen.findByRole('button', {
            name: 'Start Learning'
        }, {
            timeout: 2000
        });
        expect(start).toBeInTheDocument();



    });
})
