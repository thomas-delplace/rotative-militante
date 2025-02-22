import logo from './logo.svg';
import './App.css';

const buttonsToPutInSidebar = [
  { title: "Bouton1", img: "https://cataas.com/cat", jsfunction: () => alert("Bouton1 cliqué"), popoverDesc: "Ceci est le bouton1" },
  { title: "Bouton2", img: "https://cataas.com/cat", jsfunction: () => alert("Bouton2 cliqué"), popoverDesc: "Ceci est le bouton2" },
  { title: "Bouton3", img: "https://cataas.com/cat", jsfunction: () => alert("Bouton3 cliqué"), popoverDesc: "Ceci est le bouton3" }
];

const buttonsList = buttonsToPutInSidebar.map((button, index) => (
  <li key={index}>
  <button onClick={button.jsfunction} title={button.popoverDesc}>
  <img className="ButtonIcon" src={button.img} alt={button.title} />
  <br />
  {button.title}
  </button>
  </li>
));

function ButtonSidebar() {
  return (
    <ul className="ButtonSidebar">{buttonsList}</ul>
  );
}

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <ButtonSidebar />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React
    </a>
    </header>
    </div>
  );
}

export default App;
