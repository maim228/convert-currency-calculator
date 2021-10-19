import './App.css';
import TopNav from './components/nav/nav'
import Calc from './components/calc/calc'
import Convert from './components/converter/converter';
import Home from './components/Home/home';

import { Route } from 'react-router';

function App() {
  return (
    <div className='app'>
      <TopNav />
      <div className='containerApp'>
        <Route exact path='/' render={()=>(<Home />)} />        
        <Route path='/calc' render={()=>(<Calc />)} />
        <Route path='/converter' render={()=>(<Convert />)} />
      </div>
    </div>
  );
}

export default App;
