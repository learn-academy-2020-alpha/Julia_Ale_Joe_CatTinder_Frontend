import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class MermaidIndex extends Component{
  render(){
    return(
      <React.Fragment>
      { this.props.mermaids.map((mermaid, index) => {
  return(
    <ListGroup key={ index }>
      <h4>{ mermaid.name }</h4>
      <small>{ mermaid.age } - { mermaid.enjoys }</small>
    </ListGroup>
    )
  })}
       </React.Fragment>
    )
  }
}
export default MermaidIndex
