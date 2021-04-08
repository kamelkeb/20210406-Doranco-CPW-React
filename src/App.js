import "./App.css";
import React, { useState } from "react";
import MyButton from "./components/MyButton/MyButton";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Compteur from "./components/Compteur/Compteur";
import { validValue, validValue2 } from "./helpers/colors";

const buttonsScheme = [
  {
    titre: "+ bleu",
    color: 2,
    incr: 20,
  },
  {
    titre: "- bleu",
    color: 2,
    incr: 20,
  },
  {
    titre: "+ vert",
    color: 1,
    incr: 20,
  },
  {
    titre: "- vert",
    color: 1,
    incr: -20,
  },
  {
    titre: "+ rouge",
    color: 0,
    incr: 20,
  },
  {
    titre: "- rouge",
    color: 0,
    incr: -20,
  },
];

const App = () => {
  const [blue, setBlue] = useState(255);
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [radius, setRadius] = useState(0);

  const changeColor = (c, delta) => {
    switch (c) {
      case 0:
        setRed(validValue(red + delta));
        break;
      case 1:
        setGreen(validValue(green + delta));
        break;
      case 2:
        setBlue(validValue(blue + delta));
        break;
      default:
        break;
    }
  };

  const moreRadius = () => {
    setRadius(radius + 20);
  };
  const lessRadius = () => {
    setRadius(radius - 20);
  };

  return (
    <div className="App">
      <Header></Header>
      <Compteur></Compteur>

      {buttonsScheme.map((element, index) => (
        <MyButton
          key={"button" + index}
          size="big"
          titre={element.titre}
          onClick={() => changeColor(element.color, element.incr)}
        ></MyButton>
      ))}

      <MyButton
        size="medium"
        titre="Plus radius"
        onClick={moreRadius}
      ></MyButton>
      <MyButton
        size="medium"
        titre="Diminuer radius"
        onClick={lessRadius}
      ></MyButton>
      <div
        style={{
          height: "400px",
          width: "400px",
          borderRadius: `${radius}px`,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></div>
      <Footer></Footer>
    </div>
  );
};

export default App;
