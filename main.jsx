import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Footer from './pages/Footer.jsx'
import Header from './pages/Header.jsx'
import Student from './pages/Student.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "footer",
    element: <Footer />
  },
  {
    path: "header",
    element: <Header />
  },
  {
    path: 'student',
    element: <Student />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
