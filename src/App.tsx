import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RouteDisplay from './components/RouteDisplay'
import Home from './views/Home'
import PokemonDetail from './views/PokemonDetail'
import MoveDetail from './views/MoveDetail'
import AbilityDetail from './views/AbilityDetail'
import SearchContainer from "./containers/SearchContainer";


class App extends React.Component {
  render(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<SearchContainer/>}/>
            <Route path="/favorites" element={<RouteDisplay path='Favorites'/>}/>
            <Route path="/ability" element={<AbilityDetail />}/>
            <Route path="/pokemon" element={<PokemonDetail />}/>
            <Route path="/move" element={<MoveDetail/>}/>
            <Route path="/type" element={<RouteDisplay path='Type Details'/>}/>

          </Routes>
        </Router>
        )
  }
}

export default App;
