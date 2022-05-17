import React from "react";
import { useState } from "react";
export const Practice = () => {
  const [name, setname] = useState({
    fname: "",
    lname: "",
  });
  console.log(name.fname);

return (
    <div>
      <input type="text" value={name.fname} onChange={e => setname({fname : e.target.value})}/>
      <input type="text" value={name.lname} onChange={e => setname({lname : e.target.value})}/>
      <h1>
        fname is {name.fname} lname {name.lname}{" "}
      </h1>
    </div>
  );
};
