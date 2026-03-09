// import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Facilities from "./components/Facilities"
import CTA from "./components/CTA"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

import "./App.css"

function App() {
  return (
    <div className="app">
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <Facilities/>
      <CTA/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App