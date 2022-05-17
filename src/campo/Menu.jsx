import React from "react";
import {NavLink} from "react-router-dom";
export const Menu = () => {
  return (
    <div>
        <NavLink to='/' exact activeClassName="active_class" className='bg-dark'>About  Us</NavLink>
        <NavLink to='/pokemon' exact  activeClassName="active_class" className=''> pokemon  Us</NavLink>
        <NavLink to='/user' className='btn-group-lg'>     User</NavLink>
        <NavLink to='/search' className='btn-info'>          search</NavLink>
        <br />
    
    </div>
  );
};
// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import Pokemon from "./campo/Pokemon";
// import { About } from "./About";
// import { Menu } from "./campo/Menu";
// import { User } from "./campo/User";
// const App = () => {

//   return (
//     <div>
//       <Menu/>
//       <Switch>
//         <Route exact path="/" component={About} />
//         <Route exact path="/pokemon" component={Pokemon} />
//         <Route  path='/user/:HEll' component={User} />
//         <Route component={User}/>
//       </Switch>
//     </div>
//   );
// };

// export default App;
