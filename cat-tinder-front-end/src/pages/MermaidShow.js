import React, { Component } from 'react';
import {  Button } from 'reactstrap';
import { Redirect } from "react-router-dom"


class MermaidShow extends Component{
  constructor(props){
    super(props)
    this.state = {
      mermaid: [],
      success: false,
      editable: false
    }
    this.getMermaid()
  }
  componentDidMount(){
    this.getMermaid()
  }
//request to show the mermaid by id
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
//request to delete the mermaid by id
 handleDelete = () => {
   const { id } = this.props.match.params
   console.log(id);
   fetch(`http://localhost:3000/mermaids/${id}`, {
     method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => {
    if(response.ok){
      alert("this profile is deleted")
      this.setState({ success: true })
      return this.props.getMermaids()
    }
  })

}
//generate a edited mermaid profile
  handleEdit = () => {
    if(this.state.editable){
      const { id } = this.props.match.params
      let name = this.name.value
      let age = this.age.value
      let enjoys = this.enjoys.value
      let mermaid = {id: id, name: name, age: age, enjoys: enjoys}
      this.handleUpdate(mermaid)
    }
   this.setState({
     editable: !this.state.editable
   })
 }
//request to update the mermaid by id
  handleUpdate = (mermaid) => {
    const { id } = this.props.match.params
    fetch(`http://localhost:3000/mermaids/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({mermaid: mermaid}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.updateMermaid(mermaid)
      })
  }
//set the edited profile to state
  updateMermaid = (mermaid) => {
    this.setState({
      mermaid: mermaid
    })
  }


  render(){
    let name = this.state.editable?
        <input type='text' ref={input => this.name = input} defaultValue={this.state.mermaid.name}/>
        :<p>{this.state.mermaid.name}</p>

    let age = this.state.editable?
        <input type='text' ref={input => this.age = input} defaultValue={this.state.mermaid.age}/>
        :<p>{this.state.mermaid.age}</p>

    let enjoys = this.state.editable?
        <input type='text' ref={input => this.enjoys = input} defaultValue={this.state.mermaid.enjoys}/>
        :<p>{this.state.mermaid.enjoys}</p>

    return(
      <>
      <div>
        <h4>Name: </h4>
        {name}
        <h4>Age: </h4>
        {age}
        <h4>Enjoys:</h4>
        {enjoys}
        <div>
        <Button color="secondary" href="/">Home</Button>
        <Button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</Button>
        <Button onClick={ this.handleDelete }>Delete Profile</Button>
        { this.state.success && <Redirect to="/"/> }
        </div>
      </div>
      </>
    )
  }
}
export default MermaidShow
