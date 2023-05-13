import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Alluser from './components/Alluser';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import Err from './components/Error';

import {Switch,Route} from "react-router-dom"




function App() {
  return (
   <>
    <Navbaar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/alluser" component={Alluser} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/view/:id" component={Details} />
      <Route path="/*" element={<Err />} />

    </Switch>
   
   </>
  );
}

export default App;






