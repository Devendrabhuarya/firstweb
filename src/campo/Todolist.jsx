import React from "react";
const Todolist = (props) => {
 
  return (
    <>
      <li>
        {" "}
        <span onClick={()=>{
            props.onSelect(props.id);
            // props.onSelect(2);
        }}>
          <ion-icon name="close-outline"></ion-icon>
        </span>{" "}
        {props.text}
      </li>
      ;
    </>
  );
};
export default Todolist;







// import React, { useState } from "react";
// import Todolist from "./campo/Todolist";
// import "./index.css";

// const App = () => {
//   const [input, setinput] = useState(); //onChange
//   const [Items, setitem] = useState([]); //onClick

//   const itemfun = (event) => {
//     setinput(event.target.value);
//   };
//   const listofitem = () => {
//     setitem((olditem) => {
//       return [...olditem, input];
//     });
//     setinput("");
//   };
//   const delet = (id) => {
//     console.log("delete");
//     setitem((olditem) => {
//       return olditem.filter((arrElem, index) => {
//         return index !== id;
//       });
//     });
//   };
//   return (
//     <>
//       <div className="main-div">
//         <div className="center-div">
//           <br />
//           <h1>ToDo List</h1>
//           <input
//             type="text"
//             placeholder="add a item"
//             onChange={itemfun}
//             value={input}
//           />
//           <button onClick={listofitem}> + </button>
//           <ol>
//             {Items.map((itemval, index) => {
//               return (
//                 <Todolist
//                   text={itemval}
//                   key={index}
//                   id={index}
//                   onSelect={delet}
//                 />
//               );
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
