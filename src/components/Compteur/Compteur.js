import React, { useState, useEffect } from "react";
import MyButton from "../MyButton/MyButton";

function Compteur() {
  /**
   * useState est une fonction spéciale de la librairie react.
   * Elle prend un état initial (n'importe quel type de valeur js) en argumen et retourne un tableau de deux éléments
   * Le premier élément du tableau retourné permettra de consulter la valeur courante de l'état
   * Le deuxième élément du tableau retourné permettra de modifier la valeur de l'état
   */
  const tab = useState(0);
  const compteur = tab[0];
  const setCompteur = tab[1];

  const decrHandler = () => {
    setCompteur(compteur - 1);
  };

  const incrHandler = () => {
    setCompteur(compteur + 1);
  };
  return (
    <div>
      <MyButton size="big" titre="Décrémenter" onClick={decrHandler}></MyButton>
      <MyButton size="big" titre="Incrémenter" onClick={incrHandler}></MyButton>
      <p>{compteur}</p>
    </div>
  );
}

export default Compteur;
