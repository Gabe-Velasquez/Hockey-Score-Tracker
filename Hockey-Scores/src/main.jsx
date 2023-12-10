import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Scores from './Pages/Scores.jsx'
import Teams from './Pages/Teams.jsx'
import Avs from './Pages/Teams/Avs.jsx'
import BBB from './Pages/Teams/BBB.jsx'
import Bolts from './Pages/Teams/Bolts.jsx'
import Buffaslug from './Pages/Teams/Buffaslug.jsx'
import Canes from './Pages/Teams/Canes.jsx'
import Caps from './Pages/Teams/Caps.jsx'
import Cats from './Pages/Teams/Cats.jsx'
import Devils from './Pages/Teams/Devils.jsx'
import Ducks from './Pages/Teams/Ducks.jsx'
import Flyers from './Pages/Teams/Flyers.jsx'
import FSD from './Pages/Teams/FSD.jsx'
import Habs from './Pages/Teams/Habs.jsx'
import Hawks from './Pages/Teams/Hawks.jsx'
import Jackets from './Pages/Teams/Jackets.jsx'
import Jets from './Pages/Teams/Jets.jsx'
import Landers from './Pages/Teams/Landers.jsx'
import Leafs from './Pages/Teams/Leafs.jsx'
import Monarchs from './Pages/Teams/Monarchs.jsx'
import Notes from './Pages/Teams/Notes.jsx'
import Nucks from './Pages/Teams/Nucks.jsx'
import Oil from './Pages/Teams/Oil.jsx'
import Pens from './Pages/Teams/Pens.jsx'
import Preds from './Pages/Teams/Preds.jsx'
import Rangers from './Pages/Teams/Rangers.jsx'
import Sheriffs from './Pages/Teams/Sheriffs.jsx'
import Teal from './Pages/Teams/Teal.jsx'
import Wild from './Pages/Teams/Wild.jsx'
import Wings from './Pages/Teams/Wings.jsx'
import Yotes from './Pages/Teams/Yotes.jsx'
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
    },
    // Teams!
    {
      path: '/Teams',
      element: <Teams />
    },
    {
      path: '/Teams/ColoradoAvalanche',
      element: <Avs />
    }
  ],
},
]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
