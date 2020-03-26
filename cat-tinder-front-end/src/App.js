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
      mermaids: [],
        }
    this.getMermaids()
      }

    componentDidMount(){
      this.getMermaids()
    }

  getMermaids = () => {
    // Making a fetch request to the url of our Rails app
    // fetch returns a promise
   fetch("http://localhost:3000/mermaids")
   .then((response)=>{
     //Make sure we get a successful response back
     if(response.status === 200){
       // We need to convert the response to JSON
       // This also returns a promise
       return(response.json())
     }
   })
   .then((mermaidsArray)=>{
      //Finally, we can assign the mermaids to state, and they will render
     this.setState({ mermaids: mermaidsArray })
   })
 }
 createMermaid = (newmermaid) => {
    return fetch("http://localhost:3000/mermaids", {
      // converting an object to a string
    	body: JSON.stringify(newmermaid),
      // specify the info being sent in JSON and the info returning should be JSON
    	headers: {
    		"Content-Type": "application/json"
    	},
      // HTTP verb so the correct endpoint is invoked on the server
    	method: "POST"
    })
    .then((response) => {
      // if the response is good call the getCats method
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
          <Route exact path="/newmermaid" render={ (props) => <NewMermaid handleSubmit={ this.createMermaid } /> }
        />
            <Route exact path="/mermaids/:id" render={ (props) => <MermaidShow {...props} mermaids={ this.state.mermaids } /> } />
            <Route exact path="/" render={ (props) => <MermaidIndex mermaids={ this.state.mermaids } /> } />

          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
