import React from "react";
import { useParams, useLocation ,useHistory} from "react-router-dom";
export const User = () => {
  const { HEll } = useParams();
  const location = useLocation();
  const history=useHistory();
  console.log(history);
  return (
    <div>
      <h1>i am {HEll} user</h1>
      <p>my currrent location { location.pathname}</p>
      {location.pathname === '/user/devendra' ?   
        <button onClick={()=>{
        history.goBack('/pokemon');
        }}>go back </button> : null}
    </div>
  );
};
