import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Trainers from './pages/Trainers'
import Membership from './pages/Membership'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-brand-black text-brand-light">
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
