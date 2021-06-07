
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home/Home';
import NavBar from './components/nav/NavBar';
import Help from './components/help/Help';
import SearchPhone from './components/phone/SearchPhone';
import Demand from './components/demand/Demand';
import History from './components/history/History';
import Payments from './components/payments/Payments';
import Transfers from './components/transfers/Transfers';
import BoxLeft from './components/boxLeft/BoxLeft';


function App() {
  return (
    <div>
       
      <BrowserRouter>
      <NavBar/>
      <BoxLeft/>
      <Route path='/' component={Home} exact/>
      <Route path='/help' component={Help} exact/>
      <Route path='/searchPhone' component={SearchPhone} exact/>
      <Route path='/transfers' component={Transfers} exact/>
      <Route path='/payments' component={Payments} exact/>
      <Route path='/history' component={History} exact/>
      <Route path='/demend' component={Demand} exact/>
      </BrowserRouter>   
     
     
    </div>
  );
}

export default App;
