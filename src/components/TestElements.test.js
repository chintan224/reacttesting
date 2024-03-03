import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import TestElements from './TestElements';

afterEach(cleanup);

it('showequal to 0', () => {
    const {getByTestId} = render(<TestElements />);
    expect(getByTestId('counter')).toHaveTextContent(0);
})

it('show be enabled', () => {
    const {getByTestId} = render(<TestElements />);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
})

it('show be disabled', () => {
    const {getByTestId} = render(<TestElements />);
    expect(getByTestId('button-down')).toBeDisabled();
})

