import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

class MermaidShow extends Component{
  render(){
    const { id } = this.props.match.params
    const mermaid = this.props.mermaids.find((mermaid) => mermaid.id === parseInt(id))
    return(
      <>
      <div>
        <Card>
          <CardBody>
            <CardTitle>{ mermaid.name }</CardTitle>
            <CardSubtitle>Age: { mermaid.age }</CardSubtitle>
          </CardBody>
        {/*  <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
          <CardBody>
            <CardText>Enjoys: { mermaid.enjoys }</CardText>
            <CardLink href="/">Home</CardLink>
          </CardBody>
        </Card>
      </div>
      </>
    )
  }
}
export default MermaidShow
