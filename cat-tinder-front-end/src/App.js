import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import mermaids from "./mermaids"
import Header from "./components/Header"
import MermaidIndex from "./pages/MermaidIndex"
import MermaidShow from "./pages/MermaidShow"
import NewMermaid from "./pages/NewMermaid"

class App extends Component{
  constructor(){
    super()
    this.state = {
      allMermaids: mermaids
    }
  }
  handleNewMermaid = (form) =>{
    console.log("New Mermaid")
    console.log(form)
  }
  render(){
    return(
      <React.Fragment>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/newmermaid" render={ (props) => <NewMermaid handleNewMermaid={ this.handleNewMermaid } /> } />
            <Route exact path="/mermaid/:id" render={ (props) => <MermaidShow {...props} mermaids={ this.state.allMermaids } /> } />
            <Route exact path="/" render={ (props) => <MermaidIndex mermaids={ this.state.allMermaids } /> } />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
