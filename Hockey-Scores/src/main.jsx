import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Scores from './Pages/Scores.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
  children:[
    {
      index: true,
      element: <Home /> 
    },
    {
      path: "/Home",
      element: <Home />
    },
    {
      path: '/About',
      element: <About />
    },
    {
      path: '/Scores',
      element: <Scores />
    },
    {
      path: '/Contact',
      element: <Contact />
    }
  ],
},
]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
