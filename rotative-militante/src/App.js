import logo from './logo.svg';
import './App.css';

const buttonsToPutInSidebar = [
  { title: "Format", img: "https://cataas.com/cat", jsfunction: () => alert("Format cliqué"), popoverDesc: "Ceci est le bouton1" },
  { title: "Couleur de fond", img: "https://cataas.com/cat?a=1", jsfunction: () => alert("Bouton2 cliqué"), popoverDesc: "Ceci est le bouton2" },
  { title: "Fil d'ariane", img: "https://cataas.com/cat?a=2", jsfunction: () => alert("Bouton3 cliqué"), popoverDesc: "Ceci est le bouton3" }
];

const buttonsList = buttonsToPutInSidebar.map((button, index) => (
  <li key={index}>
  <button className="button" onClick={button.jsfunction} title={button.popoverDesc}>
  <img className="button_icon" src={button.img} alt={button.title} />
  <br />
  {button.title}
  </button>
  </li>
));

function ButtonSidebar() {
  return (
    <div className="button_sidebar_container">
    <ul className="button_sidebar">{buttonsList}</ul>
    </div>
  );
}

function App() {
  return (
    <ButtonSidebar />
  );
}

export default App;
