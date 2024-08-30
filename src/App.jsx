import Navbar from "./components/NavBar/Navbar"
import Intro from "./components/NavBar/Intro/Intro"
import Skills from "./components/NavBar/Skills/Skills"
import Works from "./components/NavBar/Works/Works"
import Contact from "./components/NavBar/Contact/Contact"
import Footer from "./components/NavBar/Footer/Footer"


function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
