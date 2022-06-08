import React from 'react';
import {useLocation, BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HeroSlide from './components/heroSlide';
import Navigationbar from './components/Navigationbar';

class DebugRouter extends BrowserRouter {
    constructor(props){
      super(props);
      console.log('initial history is: ', JSON.stringify(this.history, null,2))
      this.history.listen((location, action)=>{
        console.log(
          `The current URL is ${location.pathname}${location.search}${location.hash}`
        )
        console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2));
      });
    }
  }


function App() {
  return (
        <DebugRouter>
            <Switch>
                <Route exact path="/" name="Home">
                    <Navigationbar/>
                    <HeroSlide/>
                </Route>
                <Route path="/about" name="About Us">
                    <Header type="header-normal"/>
                </Route>
                <Route path="/prediction" name="Prediction">
                </Route>
            </Switch>
            <Footer/>
      </DebugRouter>
  );
}

export default App;