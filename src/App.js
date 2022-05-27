import './App.css';
import Navbar from './components/Navbar';
function App() {
  let prop = {
    title: "Text Polisher",
    aboutText: "About Us",
    home: "Home"
  }
  let val = <>     
              <Navbar {...prop} />
            </>
  return (
    val
  );
}

export default App;
