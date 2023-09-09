import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  test('renders the boilerplate header', () => {
    render(<App />)

    const header = screen.getByText(/vite react boilerplate/i)

    expect(header).toBeInTheDocument()
  })
})
