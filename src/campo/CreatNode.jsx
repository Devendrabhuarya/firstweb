import React, { useContext } from "react";
import { Fname } from "../App";

const CreatNode = () => {
  const fm = useContext(Fname);
  console.log(Fname);
  console.log(fm);
  return <h1>devendra fm {fm}</h1>;
};

export default CreatNode;
