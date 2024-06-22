import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity= "New York"/>
        <footer>
          This Project was coded by {""}
            <a
            href="https://github.com/VickySifundza/weather-react"
            target="blank"
          >
             Vickie Sifundza
          </a> and is open-sourced on Netlify
        </footer>
      </div>
    </div>
  );
}

export default App;
