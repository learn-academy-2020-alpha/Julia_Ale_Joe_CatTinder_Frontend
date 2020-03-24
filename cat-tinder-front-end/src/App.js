import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import MermaidIndex from "./pages/MermaidIndex"
import MermaidShow from "./pages/MermaidShow"

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/mermaid/:id" component={ MermaidShow } />
            <Route exact path="/" component={ MermaidIndex } />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
