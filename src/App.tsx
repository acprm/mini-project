import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RouteDisplay from './components/RouteDisplay'
import Home from './views/Home'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<RouteDisplay path='Favorites'/>}/>
        <Route path="/ability" element={<RouteDisplay path='Ability Details'/>}/>
        <Route path="/pokemon" element={<RouteDisplay path='Pokemon Details'/>}/>
        <Route path="/move" element={<RouteDisplay path='Move Details'/>}/>
        <Route path="/type" element={<RouteDisplay path='Type Details'/>}/>
      </Routes>
    </Router>
  )
}


// class masih fail to compile
// class App extends React.Component {
//   render(){
//     <Router>
//       <Routes>
//         <Route path="/" element={<RouteDisplay path='Home'/>}/>
//         <Route path="/favorites" element={<RouteDisplay path='Favorites'/>}/>
//         <Route path="/ability" element={<RouteDisplay path='Ability Details'/>}/>
//         <Route path="/pokemon" element={<RouteDisplay path='Pokemon Details'/>}/>
//         <Route path="/move" element={<RouteDisplay path='Move Details'/>}/>
//         <Route path="/type" element={<RouteDisplay path='Type Details'/>}/>
        
//       </Routes>
//     </Router>
//   }
  
// }

export default App;
