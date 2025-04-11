// import { useState } from 'react'
import './App.css'
// import Services from './Sections/Services'
import Experience from './Sections/Experience'
import Footer from './Sections/Footer'
import TopBar from './Sections/Topbar'
import Banner from './Sections/Banner'
import Projects from './Sections/Projects'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Banner />
      <Projects />
      <Experience />
      <Footer />
    </>
  )
}

export default App
