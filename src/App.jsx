import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Project from './Components/Project';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <About />
            <Education />
            <Skills />
            <Project />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
