import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect} from "react-router-dom"


class NewMermaid extends Component{
    constructor(props){
        super(props)
        this.state = {
          success: false,
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

      handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.form)
        this.setState({ success: true })
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
              <Button name="submit" id="submit" onClick={ this.handleSubmit }>
              Create a New Profile
              </Button>
              { this.state.success && <Redirect to="/"/> }
              <Button id="home" href= "/" >Home</Button>
        </Form>
      </>
    )}
}


export default NewMermaid
