import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Button component', () => {

const onClickMock = jest.fn();

const defaultProps = {
  content: 'Test Button',
  type: 'primary' as const,
  onClick: onClickMock,
};

    test('should render the button with default props', () => {
        render(
            <Provider store={store}>
                <Button {...defaultProps} />
            </Provider>
        );

        const button = screen.getByTestId('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('type', 'button');
        expect(button).toHaveClass('button');
        expect(button).toHaveClass('button--primary');
        expect(button).not.toHaveClass('disabled');
        expect(button).toHaveTextContent('Test Button');
    });

    test('should render the button with custom class names', () => {
        render(
          <Provider store={store}>
            <Button {...defaultProps} isFullWidth={false} type="secondary" />
          </Provider>
        );
    
        const button = screen.getByTestId('button');
    
        expect(button).toHaveClass('button--secondary');
        expect(button).not.toHaveClass('full-width');
    });
    
    test('should render the button as disabled', () => {
        render(
            <Provider store={store}>
                <Button {...defaultProps} isDisabled />
            </Provider>
        );

        const button = screen.getByTestId('button');

        expect(button).toBeDisabled();
        expect(button).toHaveClass('disabled');

        
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(0);
    });

    test('should trigger onClick function when the button is clicked', () => {
        render(
            <Provider store={store}>
                <Button {...defaultProps} />
            </Provider>
        );

        const button = screen.getByTestId('button');

        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(2);
    });

});