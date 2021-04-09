import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import { validValue } from "../../helpers/colors";
import LabeledInput from "../LabeledInput/LabeledInput";

const buttonsScheme = [
  {
    titre: "+ bleu",
    color: 2,
    sign: +1,
  },
  {
    titre: "- bleu",
    color: 2,
    sign: -1,
  },
  {
    titre: "+ vert",
    color: 1,
    sign: 1,
  },
  {
    titre: "- vert",
    color: 1,
    sign: -1,
  },
  {
    titre: "+ rouge",
    color: 0,
    sign: 1,
  },
  {
    titre: "- rouge",
    color: 0,
    sign: -1,
  },
];

function ColorChanger() {
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
    setRadius(radius + delta);
  };
  const lessRadius = () => {
    setRadius(radius - delta);
  };

  const [delta, setDelta] = useState(20);

  const inputHandler = (event) => {
    setDelta(event.target.value);
  };
  return (
    <div>
      <LabeledInput
        value={delta}
        inputHandler={inputHandler}
        label="Saisir le mentant de changement souhaité:"
      ></LabeledInput>

      <p>La valeur de l'incrément est de: {delta}</p>

      {buttonsScheme.map((element, index) => (
        <MyButton
          key={"button" + index}
          size="big"
          titre={element.titre}
          onClick={() => changeColor(element.color, element.sign * delta)}
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
