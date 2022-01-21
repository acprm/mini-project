import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import {store} from './redux/store'

import Home from './views/Home'
import RouteDisplay from './components/RouteDisplay'
import PokemonDetail from './views/PokemonDetail'
import MoveDetail from './views/MoveDetail'
import AbilityDetail from './views/AbilityDetail'
import TypeDetail from './views/TypeDetail'
import SearchContainer from "./containers/SearchContainer";


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>

                        <Route exact path="/search">
                            <SearchContainer/>
                        </Route>

                        <Route exact path="/favorites">
                            <RouteDisplay path='Favorites'/>
                        </Route>

                        <Route exact path="/ability/:id">
                            <AbilityDetail/>
                        </Route>

                        <Route exact path="/pokemon/:id">
                            <PokemonDetail/>
                        </Route>

                        <Route exact path="/move/:id">
                            <MoveDetail/>
                        </Route>

                        <Route exact path="/type/:id">
                            <TypeDetail/>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;
