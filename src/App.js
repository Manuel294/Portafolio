import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Portafolio from './components/portafolios/Portafolio';
import Error404 from './components/error404/Error404';
import Home from './components/homepages/Home';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route path="/Portafolio" component={Portafolio} exact/>
     <Route path="/" component={Home} exact/>
     <Route>
       <Error404 />
     </Route>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
