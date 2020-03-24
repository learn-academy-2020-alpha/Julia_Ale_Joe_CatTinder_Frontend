import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class MermaidIndex extends Component{
  render(){
    return(
      <React.Fragment>
      <ListGroup>
        <ListGroupItemHeading>Mermaid One</ListGroupItemHeading>
        <ListGroupItemText>Mermaid Age - Mermaid Enjoys</ListGroupItemText>
       </ListGroup>
       </React.Fragment>
    )
  }
}
export default MermaidIndex
