import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


class NewMermaid extends Component{
    constructor(props){
        super(props)
        this.state = {
          form:{
            name: '',
            age: '',
            enjoys: ''
          }
        }
      }
      handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
      }
  render(){
    return(
      <>
        <Form>
            <FormGroup>
                <Label htmlFor="name" id="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={ this.handleChange }
                        value={ this.state.form.name }
                    />
                <Label htmlFor="age" id="age">Age</Label>
                        <Input
                            type="text"
                            name="age"
                            onChange={ this.handleChange }
                            value={ this.state.form.age }
                        />
                <Label htmlFor="enjoys" id="enjoys">Enjoys</Label>
                        <Input
                            type="text"
                            name="enjoys"
                            onChange={ this.handleChange }
                            value={ this.state.form.enjoys }
                        />    
            </FormGroup>
            <Button id="submit">Add New Mermaid</Button>
        </Form>
        <a href= "/" >Home</a>
      </>
    )}
}


export default NewMermaid