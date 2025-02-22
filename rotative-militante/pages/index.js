import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
import logo from './logo.svg';

function App() {
  const [isVisibleFormat, setIsVisibleFormat] = useState(false);
  const [isVisibleColor, setIsVisibleColor] = useState(false);
  const [isVisibleAriane, setIsVisibleAriane] = useState(false);

  const toggleShowPickerFormat = () => {
    setIsVisibleFormat(!isVisibleFormat);

    setIsVisibleColor(false);
    setIsVisibleAriane(false);
  };

  const toggleShowPickerColor = () => {
    setIsVisibleColor(!isVisibleColor);

    setIsVisibleFormat(false);
    setIsVisibleAriane(false);
  };

  const toggleShowPickerAriane = () => {
    setIsVisibleAriane(!isVisibleAriane);

    setIsVisibleColor(false);
    setIsVisibleFormat(false);
  };


  const buttonsToPutInSidebar = [
    { title: "Format", img: "https://cataas.com/cat", jsfunction: toggleShowPickerFormat, popoverDesc: "Ceci est le bouton1" },
    { title: "Couleur de fond", img: "https://cataas.com/cat?a=1", jsfunction: toggleShowPickerColor, popoverDesc: "Ceci est le bouton2" },
    { title: "Fil d'ariane", img: "https://cataas.com/cat?a=2", jsfunction: toggleShowPickerAriane, popoverDesc: "Ceci est le bouton3" }
  ];

  const buttonsFormat = [
    { format: "1:1", value:"1/1"},
    { format: "4:5", value:"4/5"},
    { format: "3:4", value:"4/5"},
    { format: "ISO", value:"4/5"},
    { format: "2:3", value:"4/5"},
    { format: "9:16", value:"4/5"},
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

  const formatButtonList = buttonsFormat.map((button, index) => (
    <button className="button_format" onClick={button.jsfunction} title={button.popoverDesc} style={{aspectRatio:button.value}}>
    {button.format}
    </button>
  ));

  return (
    <div>
    <ButtonSidebar buttonsList={buttonsList} />
    <div>
    {isVisibleFormat && (
      <div className="show_pickers_elements">
      <FormatPicker buttonsList={formatButtonList} />
      </div>
    )}
    {isVisibleColor && (
      <div className="show_pickers_elements">
      Color
      </div>
    )}
    {isVisibleAriane && (
      <div className="show_pickers_elements">
      Ariane
      </div>
    )}
    </div>
    </div>
  );
}


function FormatPicker({ buttonsList }) {
  return (
    <div className="center_content">
    <div>{ buttonsList }</div>
    <div>Portrait <input type="checkbox" /> Paysage</div>
    </div>
  );
}

function ButtonSidebar({ buttonsList }) {
  return (
    <div className="button_sidebar_container">
    <ul className="button_sidebar">{buttonsList}</ul>
    </div>
  );
}

export default App;
