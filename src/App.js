import "./App.css";
import React, { useState } from "react";
import MyButton from "./components/MyButton/MyButton";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Compteur from "./components/Compteur/Compteur";

const App = () => {
  const [blue, setBlue] = useState(255);
  const [radius, setRadius] = useState(0);

  const moreBlue = () => {
    setBlue(blue + 20);
  };
  const lessBlue = () => {
    setBlue(blue - 20);
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
      <MyButton size="big" titre="Plus de bleu" onClick={moreBlue}></MyButton>
      <MyButton size="big" titre="Diminuer bleu" onClick={lessBlue}></MyButton>
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
          backgroundColor: `rgb(0,0,${blue})`,
        }}
      ></div>
      <Footer></Footer>
    </div>
  );
};

export default App;
