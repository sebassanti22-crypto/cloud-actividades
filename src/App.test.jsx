import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import App from './App.jsx'

test('renderiza el título del proyecto', () => {
  render(<App />)
  expect(screen.getByText(/Proyecto Cloud Actividades/i)).toBeInTheDocument()
})
