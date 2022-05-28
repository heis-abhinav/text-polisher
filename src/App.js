import './App.css';
import { useState } from 'react';
import About from './components/About';
import InputForm from './components/InputForm';
import Navbar from './components/Navbar';
function App() {
  const [mode, setMode] = useState('light');
  let prop = {
    title: "Text Polisher",
    aboutText: "About Us",
    home: "Home",
    mode: mode,
    toggleMode:  () => {
      if(mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
      }

      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
    }
  }
  let val = <>     
              <Navbar {...prop} />
              <div className="container my-3">
              <InputForm {...prop} heading = "Enter text to Amend"/>
              {/* <About/> */}
              </div>
              
            </>
  return (
    val
  );
}

export default App;
