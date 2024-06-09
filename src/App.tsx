import '@/styles/globals.css'
import '@fontsource/roboto'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/provider'
import { Home } from './pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
