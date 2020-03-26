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

    componentWillMount(){
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


  render(){
    return(
      <React.Fragment>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/newmermaid" component= {NewMermaid} /> 
            <Route exact path="/mermaid/:id" render={ (props) => <MermaidShow {...props} mermaids={ this.state.mermaids } /> } />
            <Route exact path="/" render={ (props) => <MermaidIndex mermaids={ this.state.mermaids } /> } />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
