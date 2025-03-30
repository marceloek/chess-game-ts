import './index.css'

import { ThemeProvider } from '@/components/theme/provider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
