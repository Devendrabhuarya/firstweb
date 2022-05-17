import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  
  return (
    <div>
        <Common name="welcome to home page" visit="/service" btnName='GET STARTTED's/>
    </div>
  );
};

export default Home;
