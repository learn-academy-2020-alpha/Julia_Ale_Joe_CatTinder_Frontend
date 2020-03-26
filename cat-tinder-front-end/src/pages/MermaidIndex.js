import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';


class MermaidIndex extends Component{
  render(){
    return(
      <React.Fragment>
      { this.props.mermaids.map((mermaid, index) => {
        return(
          <ListGroup key={ index }>
            <ListGroupItem>
            <ListGroupItemHeading><a href={`./mermaids/${mermaid.id}`}>{ mermaid.name }</a></ListGroupItemHeading>
            <ListGroupItemText>Age: { mermaid.age } - Enjoys: { mermaid.enjoys }</ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
          )
        })}
        <Button href= "/newmermaid" >Create New Mermaid</Button>
      </React.Fragment>
    )
  }
}
export default MermaidIndex
