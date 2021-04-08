import "./App.css";
import React from "react";
import MyButton from "./components/MyButton/MyButton";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Compteur from "./components/Compteur/Compteur";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Compteur></Compteur>

      <MyButton size="big" titre="Plus de bleu" onClick={() => {}}></MyButton>
      <MyButton size="big" titre="Diminuer bleu" onClick={() => {}}></MyButton>

      <Footer></Footer>
    </div>
  );
};

export default App;
