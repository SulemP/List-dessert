import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola, soy Sulem Pastrana y aquí realizaré un proyecto para crear y buscar recetas de postres.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desserts
        </a>
      </header>
    </div>
  );
}

export default App;
