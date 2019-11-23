import React from 'react'

import Navbar from '../components/comons/Navbar'
import Section1 from '../components/comons/Section1'
import Section2 from './comons/Section2'
import Home from '../views/Home'

function App() {
  return(
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Home />
    </div>
  )
}

export default App