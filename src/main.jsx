import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App.jsx'
import HomePage from './LandingPage/home/HomePage.jsx'
import NavBar from './LandingPage/NavBar.jsx'
import Footer from './LandingPage/Footer.jsx'
import NotFoundPage from './LandingPage/NotFound.jsx'
import AboutPage from './LandingPage/about/AboutPage.jsx'
import ProductPage from './LandingPage/products/ProductPage.jsx'
import PricingPage from './LandingPage/pricing/PricingPage.jsx'
import SupportPage from './LandingPage/support/SupportPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
