import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import home from './components/Home/home'
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Switch>
         <Route exact path="/" component={home} />
       </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

