import React from "react";
import Card from "./Card.jsx";
import Sdata from "./Sdata.jsx";
const Service = () => {

  
  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="service-column ">
          {
            Sdata.map((val,ind)=>{
              return <Card
              key={ind}
              imgsrc={val.imgsrc}
              titel={val.titel}
              link={val.link}
              />
            })
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
