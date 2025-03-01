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

  const [backgroundColor, setBackgroundColor] = useState('red');

  const setBgColor = (color) => {
    setBackgroundColor(color);
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

  const colorPickerList = [
    {color:"linear-gradient(-45deg, #7b13d6, #f91616)", title:"Dégradé Violet Rouge"},
    {color:"linear-gradient(-45deg, #58398e, #da3933)", title:"Dégradé pour impression Violet Rouge"},
    {color:"linear-gradient(-45deg, #ed5fb1, #3885f4)", title:"Dégradé Rose Turquoise"},
    {color:"linear-gradient(-45deg, #d25c50, #13235f)", title:"Dégradé Saumon Bleu"},
    {color:"#7b13d6", title:"Violet"},
    {color:"#f91616", title:"Rouge"},
    {color:"#ed5fb1", title:"Rose"},
    {color:"#3885f4", title:"Bleu"},
    {color:"#f9c900", title:"Jaune"},
    {color:"#2e9959", title:"Vert"},
    { color: "#843473", title: "Rose foncé" },
    { color: "#d25c50", title: "Saumon" },
    { color: "#ff8518", title: "Orange" },
    { color: "#f0a400", title: "Jaune or" },
    { color: "#fffb56", title: "Jaune pâle" },
    { color: "#4dc104", title: "Vert vif" },
    { color: "#126c00", title: "Vert foncé" },
    { color: "#008890", title: "Bleu canard" },
    { color: "#13235f", title: "Bleu foncé" },
    { color: "#ffdc98", title: "Crême" },
    { color: "#7a3c2d", title: "Marron 1" },
    { color: "#744b23", title: "Marron 2" },
    { color: "#a98b4e", title: "Marron 3" },
    { color: "#cbcbcb", title: "Gris 1" },
    { color: "#8f8f8f", title: "Gris 2" },
    { color: "#444444", title: "Gris 3" },
    { color: "#3d3d3d", title: "Gris 4" },
    { color: "#212121", title: "Gris 5" }
  ]

  const ArianePickerList = [
    {img:"jauge_etendue_continue.png"},
    {img:"jauge_etendue_coupee.png"},
    {img:"puces_carrees_1.png"},
    {img:"puces_carrees_2.png"},
    {img:"puces_rondes_1.png"},
    {img:"puces_rondes_2.png"}
  ]

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

  const colorButtonList = colorPickerList.map((button, index) => (
    <button
    key={index}
    className="button_format cell"
    title={button.title}
    style={{ background: button.color }}
    onClick={() => setBgColor(button.color)}
    >
    </button>
  ));

  const arianeButtonList = ArianePickerList.map((button, index) => (
    <button>
      <img src={button.img} />
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
      Couleur de fond
      <ColorPicker buttonsList={colorButtonList} />
      </div>
    )}
    {isVisibleAriane && (
      <div className="show_pickers_elements">
      <ArianePicker buttonsList={arianeButtonList} />
      </div>
    )}
    </div>

    <div>
    <Svg backgroundColor={backgroundColor} />
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

function ColorPicker({ buttonsList }) {
  return (
    <div className="center_content grid">
      {buttonsList}
    </div>
  );
}

function ArianePicker({ buttonsList }) {
  return (
    <div className="center_content">
      {buttonsList}
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

function Svg({ backgroundColor }) {
  return (
    <svg
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"

    className="central_svg"
    >
    <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
    {backgroundColor.includes('linear-gradient') ? (
      backgroundColor.match(/#([\da-f]{6})/gi).map((color, index) => (
        <stop key={index} offset={`${(index / (backgroundColor.match(/#[\da-f]{6}/gi).length - 1)) * 100}%`} stopColor={color} />
      ))
    ) : (
      <stop offset="0%" stopColor={backgroundColor} />
    )}
    </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bgGradient)" />
    <g fill="red">
    <g id="fil_ariane" transform="translate(30, 450)">
      <circle id="puce_01" cx="22" cy="22" r="22" fill="#ffffff" fill-opacity="1" stroke="#ffffff" stroke-width="4" />
      <circle id="puce_02" cx="66" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
      <circle id="puce_03" cx="110" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
      <circle id="puce_04" cx="154" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
      <circle id="puce_05" cx="198" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
      <circle id="puce_06" cx="242" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
      <circle id="puce_07" cx="286" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
      <circle id="puce_08" cx="330" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
      <circle id="puce_09" cx="374" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
      <circle id="puce_10" cx="418" cy="22" r="22" fill="#ffffff" fill-opacity="0.3" stroke="#ffffff" stroke-width="4" />
    </g>
    </g>
    </svg>
  );
}

export default App;
