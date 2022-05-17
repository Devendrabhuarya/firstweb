import React, { useState, useEffect } from "react";
import axios from "axios";
const Pokemon = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      setName(res.data.name);
    }
    getData();
   
  });

  console.log(num);
  return (
    <div>
      <h1 className="my-3 bg-gradient "> you choose {num} value</h1>
      <h1>my name is {name}</h1>
     
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
};

export default Pokemon;
