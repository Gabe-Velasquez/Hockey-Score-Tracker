import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import "./styles/globals.css"
import './App.css'

function App() {

  return (
    <div className='App'>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default App
