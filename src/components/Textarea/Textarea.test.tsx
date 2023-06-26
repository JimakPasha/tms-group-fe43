import { render, screen } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea component', () => {

    test('should display the correct placeholder text', () => {
        const placeholder = 'Enter your feedback';
        render(<Textarea value="" handleChange={() => {}} title="Feedback" placeholder={placeholder} />);
        const textarea = screen.getByPlaceholderText(placeholder);
        expect(textarea).toBeInTheDocument();
      });

    test('should display error message when the errorMessage prop is passed', () => {
        const errorMessage = 'Feedback is required';
        render(
            <Textarea value="" handleChange={() => {}} title="Feedback" errorMessage={errorMessage} />
        );
        const errorMessageBlock = screen.getByTestId('error-message');
        const message = screen.getByText(errorMessage);

        expect(errorMessageBlock).toBeInTheDocument();
        expect(message).toBeInTheDocument();
    });
});