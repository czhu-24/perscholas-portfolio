import './App.css'
import ContactMe from './components/ContactMe'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <NavigationBar />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App
