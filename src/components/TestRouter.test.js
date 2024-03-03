/*eslint-disable testing-library/prefer-screen-queries*/
import {Router} from 'react-router-dom'
import {render, fireEvent, cleanup} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import TestRouter from './TestRouter'
import '@testing-library/jest-dom/extend-expect'

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
          <Router history={history}>
            {component}
          </Router>
    )
  }
}

afterEach(cleanup);

it('should render the home page', () => {
  const {container, getByTestId} = renderWithRouter(<TestRouter/>)
  const navBar = getByTestId('navbar');
  const link = getByTestId('home-link')

  expect(container.innerHTML).toMatch('Home page');
  expect(navBar).toContainElement(link)
})

it('should render the about page', () => {
  const {container, getByTestId} = renderWithRouter(<TestRouter/>)
  const navBar = getByTestId('navbar');
  const link = getByTestId('about-link')

  expect(container.innerHTML).toMatch('About');
  expect(navBar).toContainElement(link)
})

it('should navigate to the contact page with the params', () => {
  const {container, getByTestId} = renderWithRouter(<TestRouter/>)
  fireEvent.click(getByTestId('contact-link'));
  expect(container.innerHTML).toMatch("Chintan Desai")
})