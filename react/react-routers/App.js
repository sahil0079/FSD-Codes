import React, { lazy, Suspense } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import About from './About'
// import Home from './Home'


const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Suspense>

    </BrowserRouter>

  )
}

export default App