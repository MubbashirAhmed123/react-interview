import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Rating from './components/Rating'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import { lazy, Suspense } from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import About from './components/About'
import Form from './components/Form'
import Property from './components/Property'
import SingleProperty from './pages/SingleProperty'

const PropertyLazyComp = lazy(() => import('./components/Property'))

const SinglePropertyLazyComp = lazy(() => import('./pages/SingleProperty'))
function App() {

  const [fav, setFav] = useState([])

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('fav'));
      if (Array.isArray(stored)) setFav(stored);
    } catch (err) {
      console.warn('Failed to parse fav from localStorage', err);
    }
  }, []);

const addToFav = (property) => {
    const uid = property._id ?? property.id;
    const exists = fav.some((item) => (item._id ?? item.id) === uid);

    const updatedFav = exists
      ? fav.filter((item) => (item._id ?? item.id) !== uid)
      : [...fav, property];

    setFav(updatedFav);
    localStorage.setItem('fav', JSON.stringify(updatedFav));
  };


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/property/:_id' element={<Suspense fallback={<div>Loading...</div>}>
            <SinglePropertyLazyComp />
          </Suspense>}/>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}>
            <PropertyLazyComp addToFav={addToFav} fav={fav} />
          </Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App
