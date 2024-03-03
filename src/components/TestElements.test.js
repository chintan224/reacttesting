/*eslint-disable testing-library/prefer-screen-queries*/
import { render, cleanup } from '@testing-library/react';
import TestElements from './TestElements';

afterEach(cleanup);

it('counter should be equal 0' ,() => {
    const {getByTestId} = render(<TestElements/>);
    expect (getByTestId('counter')).toHaveTextContent(0);
});
it('should be enabled' ,() => {
    const {getByTestId} = render(<TestElements/>);
    expect (getByTestId('button-up')).not.toHaveAttribute('disabled');
});
it('should be disabled' ,() => {
    const {getByTestId} = render(<TestElements/>);
    expect (getByTestId('button-down')).toBeDisabled();
});