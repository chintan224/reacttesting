import { render, cleanup, fireEvent, findByText, } from '@testing-library/react';
import CounterProvider,{CounterContext, Counter} from './TextContext';

const renderWithContext = (component) => {
    return {
        ...render(
            <CounterProvider value={CounterContext}>
                {component}
            </CounterProvider>
        )
    }
}

afterEach(cleanup)

it('checks if initial state is 0',() => {
    const {getByTestId} = renderWithContext(<Counter/>);
    expect(getByTestId('counter')).toHaveTextContent('0');
})

it('increments',() => {
    const {getByTestId} = renderWithContext(<Counter/>);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent('1');
})

it('decrement',() => {
    const {getByTestId} = renderWithContext(<Counter/>);
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent('-1');
})