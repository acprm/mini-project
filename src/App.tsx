import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RouteDisplay from './components/RouteDisplay'
import Home from './views/Home'
import HomeContainer from "./containers/HomeContainer";
import SearchContainer from "./containers/SearchContainer";

class App extends React.Component {
  render(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<SearchContainer/>}/>
            <Route path="/favorites" element={<RouteDisplay path='Favorites'/>}/>
            <Route path="/ability" element={<RouteDisplay path='Ability Details'/>}/>
            <Route path="/pokemon" element={<RouteDisplay path='Pokemon Details'/>}/>
            <Route path="/move" element={<RouteDisplay path='Move Details'/>}/>
            <Route path="/type" element={<RouteDisplay path='Type Details'/>}/>

          </Routes>
        </Router>
        )
  }
}

export default App;
