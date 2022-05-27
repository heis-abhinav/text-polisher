import './App.css';
import InputForm from './components/InputForm';
import Navbar from './components/Navbar';
function App() {
  let prop = {
    title: "Text Polisher",
    aboutText: "About Us",
    home: "Home"
  }
  let val = <>     
              <Navbar {...prop} />
              <div className="container my-3">
              <InputForm heading = "Enter text to Amend"/>
              </div>
              
            </>
  return (
    val
  );
}

export default App;
