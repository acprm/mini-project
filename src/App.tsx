import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import {store} from './redux/store'

import Home from './views/Home'
import PokemonDetail from './views/PokemonDetail'
import MoveDetail from './views/MoveDetail'
import AbilityDetail from './views/AbilityDetail'
import TypeDetail from './views/TypeDetail'
import SearchContainer from "./containers/SearchContainer";
import Favorites from './views/Favorites'

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
                            <Favorites/>
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
