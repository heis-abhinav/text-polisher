import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import InputForm from './components/InputForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  let prop = {
    title: "Text Polisher",
    aboutText: "About Us",
    home: "Home",
    mode: mode,
    toggleMode:  () => {
      if(mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled", "success");
      }

      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
    }
    }
  }
  let val = <>     
            <Router>
              <Navbar {...prop} />
              <Alert alert = {alert}></Alert>
              <div className="container my-3">
              
                <Routes>
                  {/* <Route path="/about">
                    <About />
                  </Route> */}
                  <Route path="/" element = {<InputForm {...prop} heading = "Enter text to Amend"/>} />
                  <Route path="/About" element = {<About/> } />
                
                </Routes>
              
              {/* <About/> */}
              </div>
              </Router>
            </>
  return (
    val
  );
}

export default App;
