import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class MermaidShow extends Component{
  constructor(props){
    super(props)
    this.state = {
      mermaid: []
    }
    this.getMermaid()
  }
  componentDidMount(){
    this.getMermaid()
  }
  getMermaid = () => {
    const { id } = this.props.match.params
    fetch(`http://localhost:3000/mermaids/${id}`)
    .then((response)=>{
     if(response.status === 200){
       return(response.json())
     }
   })
   .then((mermaidInfo)=>{
     this.setState({ mermaid: mermaidInfo })
   })
 }

  render(){

    return(
      <>
      <div>
        <Card body inverse style={{ backgroundColor: 'blue', borderColor: '#333' }}>
          <CardTitle>{ this.state.mermaid.name }</CardTitle>
          <CardText>Age: { this.state.mermaid.age }</CardText>
          <CardText>Enjoys: { this.state.mermaid.enjoys }</CardText>
        </Card>
        <Button color="secondary" href="/">Home</Button>
      </div>
      </>
    )
  }
}
export default MermaidShow
