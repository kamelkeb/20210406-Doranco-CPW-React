import React from "react";

function LabeledInput({ value, inputHandler, label }) {
  return (
    <>
      <label for="delta">{label}</label>
      <input
        id="delta"
        value={value}
        style={{ border: "solid 1px black" }}
        onChange={inputHandler}
      ></input>
    </>
  );
}

export default LabeledInput;
