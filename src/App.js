import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Newpa from './Components/Newpa'

export default class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <Newpa />
      </div>
    )
  }
}


