import React,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Signup from './signup.js' 
import Signin from './signin.js' 
import Home from './list.js'
class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/list" component={Home}/>
        <Route eaxct path="/signup" component={Signup}/>
        <Route eaxct path="/" component={Signin}/>
        <Redirect to="/"/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}
export default App;