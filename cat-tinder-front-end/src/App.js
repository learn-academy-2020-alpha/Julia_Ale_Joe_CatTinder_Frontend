import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import MermaidIndex from "./pages/MermaidIndex"
import MermaidShow from "./pages/MermaidShow"
import NewMermaid from "./pages/NewMermaid"

class App extends Component{
  constructor(){
    super()
    this.state = {
      mermaids: []
        }
    this.getMermaids()
      }

    componentDidMount(){
      this.getMermaids()
    }

  getMermaids = () => {
   fetch("http://localhost:3000/mermaids")
   .then((response)=>{
     if(response.status === 200){
       return(response.json())
     }
   })
   .then((mermaidsArray)=>{
     this.setState({ mermaids: mermaidsArray })
   })
 }

  createMermaid = (newmermaid) => {
    return fetch("http://localhost:3000/mermaids", {
    	body: JSON.stringify(newmermaid),
    	headers: {
    		"Content-Type": "application/json"
    	},
    	method: "POST"
    })
    .then((response) => {
      if(response.ok){
        return this.getMermaids()
      }
    })
  }


  render(){
    return(
      <React.Fragment>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/newmermaid"
            render={ (props) => <NewMermaid handleSubmit={ this.createMermaid } /> }/>
            <Route exact path="/mermaids/:id"
            render={ (props) => <MermaidShow {...props} getMermaids={this.getMermaids} /> } />
            <Route exact path="/"
            render={ (props) => <MermaidIndex mermaids={ this.state.mermaids } /> } />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
