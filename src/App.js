import './App.css';
import React, { Component } from 'react'
import Card from './components/Card';
import Header from './components/Header';
import Products from './components/Products';
import Button from './components/Button'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="appBody">
          <Products/>
          
        </div>
        <Button/>
      </div>
    )
  }
}
