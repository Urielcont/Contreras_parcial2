import logo from './yo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Foto logo" />
        <p>
          José Uriel Contreras Arevalos- EXAMEN PARCIAL 2
        </p>
        <a
          className="App-link"
          href="https://utd.edu.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UNIVERSIDAD TECNOLÓGICA DE DURANGO
        </a>
      </header>
    </div>
  );
}

export default App;
