import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"

function App() {

  return (
      <div className='root'>
        <Navbar />
        <Home />
        <Footer />
      </div>
  );
}

export default App;