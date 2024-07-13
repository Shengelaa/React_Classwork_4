import React, { useState } from "react";

const Array = () => {
  const array = ["Alice", "Bob", "Charlie", "Diana"];
  const [randomName, setRandomName] = useState("");

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * array.length);
    setRandomName(array[randomIndex]);
  };

  return (
    <div>
      <button onClick={generateRandomName}>Random Name Generator</button>
      {randomName && <h1>Hello, {randomName}</h1>}
    </div>
  );
};

export default Array;
