import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);
        // default for input
        const nameElement = screen.getByRole('textbox', {
            // label of the component
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            // label of the component
            name: 'Bio'
        });
        expect(bioElement).toBeInTheDocument();
        // dropdown has default role as combobox
        const jobLocation = screen.getByRole('combobox');
        expect(jobLocation).toBeInTheDocument();
        const terms = screen.getByRole('checkbox');
        expect(terms).toBeInTheDocument();
        const buttonSubmit = screen.getByRole('button');
        expect(buttonSubmit).toBeInTheDocument();

        // directly using the text
        const pageHeading = screen.getByRole('heading', {
            // name: 'Job application form'
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();


        const section1 = screen.getByRole('heading', {
            // name: 'section 1'
            level: 2
        });
        expect(section1).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name', { selector: "input" });
        expect(nameElement2).toBeInTheDocument();

        // label is wrapped around this text
        const termsElement2 = screen.getByLabelText("I agree");
        expect(termsElement2).toBeInTheDocument();

        // getByPlaceholer
        const nameElement3 = screen.getByPlaceholderText("Fullname");
        expect(nameElement3).toBeInTheDocument();

        const paragraphElement = screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue('Vishwas');
        expect(nameElement4).toBeInTheDocument();

        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();

    });
});