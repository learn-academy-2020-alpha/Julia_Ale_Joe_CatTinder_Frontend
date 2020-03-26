import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';



class MermaidIndex extends Component{
  render(){
    return(
      <React.Fragment>
      { this.props.mermaids.map((mermaid, index) => {
        return(
          <ListGroup key={ index }>
            <ListGroupItem>
            <ListGroupItemHeading><a href={`./mermaid/${mermaid.id}`}>{ mermaid.name }</a></ListGroupItemHeading>
            <ListGroupItemText>Age: { mermaid.age } - Enjoys: { mermaid.enjoys }</ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
          )
        })}
        <a href= "/newmermaid" >Create New Mermaid</a>
      </React.Fragment>
    )
  }
}
export default MermaidIndex
