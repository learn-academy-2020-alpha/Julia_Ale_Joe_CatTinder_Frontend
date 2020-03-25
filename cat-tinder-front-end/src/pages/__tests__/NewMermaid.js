import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NewMermaid from '../NewMermaid'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewMermaid />, div)
})

it('has a name input', ()=>{
  const component = mount(<NewMermaid />)
  // looks for an id of name on the label tag
  expect(component.find('label#name').text()).toBe("Name")
})

it('has a age input', ()=>{
  const component = mount(<NewMermaid />)
  // looks for an id of age on the label tag
  expect(component.find('label#age').text()).toBe("Age")
})

it('has a enjoys input', ()=>{
  const component = mount(<NewMermaid />)
  // looks for an id of enjoys on the label tag
  expect(component.find('label#enjoys').text()).toBe("Enjoys")
})

it('has a submit button', ()=>{
  const component = mount(<NewMermaid />)
  // looks for an id of submit on the button
  expect(component.find('button#submit').text()).toBe("Add New Mermaid")
})