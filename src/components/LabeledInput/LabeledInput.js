import React from "react";

function LabeledInput({ value, inputHandler }) {
  return (
    <input
      value={value}
      style={{ border: "solid 1px black" }}
      onChange={inputHandler}
    ></input>
  );
}

export default LabeledInput;
