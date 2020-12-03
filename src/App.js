import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';


import Products from './components/Pages/Products'
import Home  from './components/Pages/Home'
import SignUp from './components/Pages/SignUp'


const triggerText = 'Open Form';
   const onSubmit = (event) => {
   event.preventDefault(event);
   console.log(event.target.name.value);
   console.log(event.target.email.value);
 };

function App() {
  return (
    <Router>
<Navbar />
     <Switch>
       <Route path = '/'exact component ={Home}/>
       <Route path = '/products'exact component ={Products}/>
       <Route path = '/signup'exact component ={SignUp}/>
     </Switch>
     
    
    </Router>
    
  
  );
};

export default App;
