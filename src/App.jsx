import { useState,useEffect } from 'react'
import Navbar from './components/common/Navbar'
import './App.css'
import Home from './pages/Home'
import Footer from './components/common/Footer';


function App() {
    const [darkMode, setDarkMode] = useState(true);
 useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
   

  return (
    <>
    <Home />
      <Footer />
     
    </>
  )
}

export default App
