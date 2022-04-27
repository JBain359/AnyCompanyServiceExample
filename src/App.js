import './App.css';
import React from 'react';
import { AppProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';

//Helpers
import WaitForLoad from './Helpers/WaitForLoad';

// Components
import Banner from './Nav-Banner/Banner';
import WebDev from './WebDev/WebDev';



//const PixelPortfolio = React.lazy(() => import('./ArtPorfolio/PixelPortfolio'));

function App() {
  return (
    <WaitForLoad>
      <Router>
        <AppProvider>
          <Banner />
          <WebDev />
        </AppProvider>
      </Router>
    </WaitForLoad>
  );
}

export default App;
