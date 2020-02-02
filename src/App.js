import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './container/HomePage';
import PeoplesListPage from './container/peopleListPage';
import PlanetsListPage from './container/planetsListPage';
import FilmListPage from './container/filmsListPage';
import InfiniteListPage from './container/AllPeoplesListPage';
import { AppProvider } from './component/context';
import OrderPage from './container/OrderPage';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/peoples/id=:number" component={PeoplesListPage} />
            <Route path="/planets/id=:number" component={PlanetsListPage} />
            <Route path="/films/id=:number" component={FilmListPage} />            
          </Switch>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
