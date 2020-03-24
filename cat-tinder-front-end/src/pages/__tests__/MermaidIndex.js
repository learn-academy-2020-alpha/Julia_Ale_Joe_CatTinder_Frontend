import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MermaidIndex from '../MermaidIndex'

Enzyme.configure({ adapter: new Adapter() })

it('MermaidIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MermaidIndex />, div)
})
