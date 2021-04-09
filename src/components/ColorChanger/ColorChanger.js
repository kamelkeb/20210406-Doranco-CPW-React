import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import { validValue } from "../../helpers/colors";
import LabeledInput from "../LabeledInput/LabeledInput";

const buttonsScheme = [
  {
    titre: "+ bleu",
    color: 2,
    incr: 20,
  },
  {
    titre: "- bleu",
    color: 2,
    incr: -20,
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

function ColorChanger() {
  const [blue, setBlue] = useState(255);
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [radius, setRadius] = useState(0);
  const [delta, setDelta] = useState(20);

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
  const inputHandler = (event) => {
    setDelta(event.target.value);
  };
  return (
    <div>
      <LabeledInput value={delta} inputHandler={inputHandler}></LabeledInput>
      <p>La valeur de l'incrément est de: {delta}</p>
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
    </div>
  );
}

export default ColorChanger;
