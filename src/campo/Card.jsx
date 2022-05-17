import React from "react";
import "./cs campo/Card.css";  
function Card(props) {
  return (
    <>
      <div className="outer">
        <div className="inner">
          <img src={props.imgsrc} alt="" />
        </div>
        <p>A NETFLIX ORIGNAL SERIES  </p>
       <h6 >{props.titel}</h6>
        <a href={props.link} alt="new">WATCH NOW</a>
      </div>
    </>
  );
}

export default Card;








// function Ncard(val,index){
//   console.log(val,index);
//   return(
//     <Card
//     key={val.id}
//     imgsrc={val.imgsrc}
//     titel={val.titel}
//     link={val.link}
//  />
//   );
// }

// function App (){
//   return (
// <div className="main">
//       { Linkdata.map(Ncard)}
//       {/* {Linkdata.map(function Ncard(val) {
//         return <Card imgsrc={val.imgsrc} titel={val.titel} link={val.link} />;
//       })} */}
//     </div>
//   );
// }

// export default App;
