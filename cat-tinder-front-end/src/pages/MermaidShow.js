import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class MermaidShow extends Component{
  render(){
    const { id } = this.props.match.params
    const mermaid = this.props.mermaids.find((mermaid) => mermaid.id === parseInt(id))
    return(
      <>
      <div>
        <Card body inverse color="info">
          <CardTitle>{ mermaid.name }</CardTitle>
          <CardText>Age: { mermaid.age }</CardText>
          <CardText>Enjoys: { mermaid.enjoys }</CardText>
        </Card>
        <Button color="secondary" href="/">Home</Button>
      </div>
      </>
    )
  }
}
export default MermaidShow
