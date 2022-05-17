import React from "react";

const Card = (props) => {
  const CSS = {
    width: "18rem",
    
  };
  
  return (
    <>
      <div className="card " style={CSS}>
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titel}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href={props.link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
