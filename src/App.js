import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter ,Switch ,Route } from 'react-router-dom'
import Home from './components/Home'
import Experience from './components/Experience'
import Works from './components/Works'
import Contact from './components/Contact'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <div className="container">
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/exp' component={Experience}/>
       <Route path='/works' component={Works}/>
       <Route path='/contact' component={Contact}/>
     </Switch>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
