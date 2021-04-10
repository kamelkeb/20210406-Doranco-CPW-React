import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Compteur from "./components/Compteur/Compteur";
import ColorChanger from "./components/ColorChanger/ColorChanger";
import LabeledInput from "./components/LabeledInput/LabeledInput";

const App = () => {
  const [prenom, setPrenom] = useState("");

  const inputHandler = (event) => {
    setPrenom(event.target.value);
  };
  return (
    <div className="App">
      <Header prenom={prenom}></Header>

      <Compteur></Compteur>
      <ColorChanger></ColorChanger>
      <Footer></Footer>
    </div>
  );
};

export default App;

/*
const t = (
  <LabeledInput
    value={prenom}
    inputHandler={inputHandler}
    label="Veuillez saisir votre prénom:"
  ></LabeledInput>
);
*/
