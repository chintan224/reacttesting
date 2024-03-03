/*eslint-disable testing-library/prefer-screen-queries*/
import { render, cleanup, fireEvent } from '@testing-library/react';
import TestEvents from './TestEvents';

afterEach(cleanup);

it('counter should be equal 0' ,() => {
    const {getByTestId} = render(<TestEvents/>);
    expect (getByTestId('counter')).toHaveTextContent(0);
});
it('increments counter',() => {
    const {getByTestId} = render(<TestEvents/>);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent('1');
});
it('decrements counter',() => {
    const {getByTestId} = render(<TestEvents/>);
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent('-1');
});