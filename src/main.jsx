import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import ContactUs from './pages/ContactUs.jsx'
import TermsAndConditions from './components/TermsAndConditions.jsx'
import PrivacyPolicy from './components/PrivatePolicy.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/contactUs' element={<ContactUs />}/>
      <Route path='/terms-and-conditions' element={<TermsAndConditions />}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
