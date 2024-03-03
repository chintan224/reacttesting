/*eslint-disable testing-library/prefer-screen-queries*/
import { render, cleanup, fireEvent, findByText, screen } from '@testing-library/react';
import TestAsync from './TestAsync';

afterEach(cleanup);

it('increments counter after 0.5 sec', async () => {
    const {getByTestId,getByText} = render(<TestAsync/>);
    fireEvent.click(getByTestId('button-up'));
    const counter = await screen.findByText('1');
    expect (counter).toHaveTextContent('1');
})