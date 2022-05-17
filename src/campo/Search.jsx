import React, { useState } from "react";
import { Sresult } from "./Sresult";
export const Search = () => {
  const [img, setimg] = useState();

  const inputEvent = (event) => {
    setimg(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        onChange={inputEvent}
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
  
      />
      { img===''? null:  <Sresult name={img}/>}
    
    </div>
  );
};
