import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Scores from './Pages/Scores.jsx';
import Upcoming from './Pages/Upcoming.jsx';
import Teams from './Pages/Teams.jsx';
import Avs from './Pages/Teams/Avs.jsx';
import BBB from './Pages/Teams/BBB.jsx';
import Kraken from './Pages/Teams/Kraken.jsx';
import Bolts from './Pages/Teams/Bolts.jsx';
import Buffaslug from './Pages/Teams/Buffaslug.jsx';
import Canes from './Pages/Teams/Canes.jsx';
import Caps from './Pages/Teams/Caps.jsx';
import Cats from './Pages/Teams/Cats.jsx';
import Devils from './Pages/Teams/Devils.jsx';
import Ducks from './Pages/Teams/Ducks.jsx';
import Flyers from './Pages/Teams/Flyers.jsx';
import FSD from './Pages/Teams/FSD.jsx';
import Habs from './Pages/Teams/Habs.jsx';
import Hawks from './Pages/Teams/Hawks.jsx';
import Jackets from './Pages/Teams/Jackets.jsx';
import Jets from './Pages/Teams/Jets.jsx';
import Knights from './Pages/Teams/Knights.jsx';
import Landers from './Pages/Teams/Landers.jsx';
import Leafs from './Pages/Teams/Leafs.jsx';
import Monarchs from './Pages/Teams/Monarchs.jsx';
import Notes from './Pages/Teams/Notes.jsx';
import Nucks from './Pages/Teams/Nucks.jsx';
import Oil from './Pages/Teams/Oil.jsx';
import Pens from './Pages/Teams/Pens.jsx';
import Preds from './Pages/Teams/Preds.jsx';
import Rangers from './Pages/Teams/Rangers.jsx';
import Sens from './Pages/Teams/Sens.jsx';
import Sheriffs from './Pages/Teams/Sheriffs.jsx';
import Teal from './Pages/Teams/Teal.jsx';
import Wild from './Pages/Teams/Wild.jsx';
import Wings from './Pages/Teams/Wings.jsx';
import Yotes from './Pages/Teams/Yotes.jsx';
import './index.css';

const routes = [
    {
      path: '/',
      element: <App />,
      errorElement: (
        <div>
          <img className='nfound' src='/hockey404.jpeg'></img>
          <h1 className='display-2 text-center'>
            Whoops! This page is empty... please go back
          </h1>
        </div>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/Home',
          element: <Home />,
        },
        {
          path: '/About',
          element: <About />,
        },
        {
          path: '/Scores',
          element: <Scores />,
        },
        {
          path: '/Upcoming',
          element: <Upcoming />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
        // Teams!
        {
          path: '/Teams',
          element: <Teams />,
        },
        {
          path: '/Teams/ColoradoAvalanche',
          element: <Avs />,
        },
        {
          path: '/Teams/SeattleKraken',
          element: <Kraken />,
        },
        {
          path: '/Teams/BostonBruins',
          element: <BBB />,
        },
        {
          path: '/Teams/BuffaloSabres',
          element: <Buffaslug />,
        },
        {
          path: '/Teams/CalgaryFlames',
          element: <FSD />,
        },
        {
          path: '/Teams/CarolinaHurricanes',
          element: <Canes />,
        },
        {
          path: '/Teams/ChicagoBlackhawks',
          element: <Hawks />,
        },
        {
          path: '/Teams/WashingtonCapitals',
          element: <Caps />,
        },
        {
          path: '/Teams/ColumbusBlueJackets',
          element: <Jackets />,
        },
        {
          path: '/Teams/AnaheimDucks',
          element: <Ducks />,
        },
        {
          path: '/Teams/DallasStars',
          element: <Sheriffs />,
        },
        {
          path: '/Teams/TampaBayLightning',
          element: <Bolts />,
        },
        {
          path: '/Teams/FloridaPanthers',
          element: <Cats />,
        },
        {
          path: '/Teams/NewJerseyDevils',
          element: <Devils />,
        },
        {
          path: '/Teams/NewYorkIslanders',
          element: <Landers />,
        },
        {
          path: '/Teams/NewYorkRangers',
          element: <Rangers />,
        },
        {
          path: '/Teams/PhiladelphiaFlyers',
          element: <Flyers />,
        },
        {
          path: '/Teams/MontrealCanadiens',
          element: <Habs />,
        },
        {
          path: '/Teams/WinnipegJets',
          element: <Jets />,
        },
        {
          path: '/Teams/TorontoMapleLeafs',
          element: <Leafs />,
        },
        {
          path: '/Teams/VegasGoldenKnights',
          element: <Knights />,
        },
        {
          path: '/Teams/LosAngelesKings',
          element: <Monarchs />,
        },
        {
          path: '/Teams/StLouisBlues',
          element: <Notes />,
        },
        {
          path: '/Teams/OttawaSenators',
          element: <Sens />,
        },
        {
          path: '/Teams/VancouverCanucks',
          element: <Nucks />,
        },
        {
          path: '/Teams/EdmontonOilers',
          element: <Oil />,
        },
        {
          path: '/Teams/PittsburghPenguins',
          element: <Pens />,
        },
        {
          path: '/Teams/NashvillePredators',
          element: <Preds />,
        },
        {
          path: '/Teams/SanJoseSharks',
          element: <Teal />,
        },
        {
          path: '/Teams/MinnesotaWild',
          element: <Wild />,
        },
        {
          path: '/Teams/DetroitRedWings',
          element: <Wings />,
        },
        {
          path: '/Teams/ArizonaCoyotes',
          element: <Yotes />,
        },
      ],
    },
  ];

  const router = createBrowserRouter({
    basename: '/',
    routes:routes,
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
