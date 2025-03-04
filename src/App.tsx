import { useState } from 'react'
import './App.css'
import Services from './components/services'
import Experience from './components/Experience'
import Footer from './components/footer'
import TopBar from './components/topbar'
import Banner from './components/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Banner />
      <Services />
      <Experience />
      <Footer />
    </>
  )
}

export default App
