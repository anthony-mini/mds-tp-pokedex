import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes';
import '../src/sass/mains.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Strict mode : StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
// Permet d'appler le useEffect 2 fois pour chaque composant enfant de App (en mode développement) pour vérifier si le composant est pur et ne dépend que de ses props et state. Ce qui permet de détecter les effets secondaires et les problèmes de performances.
// https://fr.reactjs.org/docs/strict-mode.html
